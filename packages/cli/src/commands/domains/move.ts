import chalk from 'chalk';
import plural from 'pluralize';

import { User, Team } from '@khulnasoft-internals/types';
import * as ERRORS from '../../util/errors-ts';
import Client from '../../util/client';
import getScope from '../../util/get-scope';
import moveOutDomain from '../../util/domains/move-out-domain';
import isRootDomain from '../../util/is-root-domain';
import textInput from '../../util/input/text';
import param from '../../util/output/param';
import getDomainAliases from '../../util/alias/get-domain-aliases';
import getDomainByName from '../../util/domains/get-domain-by-name';
import confirm from '../../util/input/confirm';
import getTeams from '../../util/teams/get-teams';
import { getCommandName } from '../../util/pkg-name';

type Options = {
  '--yes': boolean;
};

export default async function move(
  client: Client,
  opts: Partial<Options>,
  args: string[]
) {
  const { output } = client;
  const { contextName, user } = await getScope(client);
  const { domainName, destination } = await getArgs(args);
  if (!isRootDomain(domainName)) {
    output.error(
      `Invalid domain name "${domainName}". Run ${getCommandName(
        `domains --help`
      )}`
    );
    return 1;
  }

  const domain = await getDomainByName(client, contextName, domainName);
  if (domain instanceof ERRORS.DomainNotFound) {
    output.error(`Domain not found under ${chalk.bold(contextName)}`);
    output.log(`Run ${getCommandName(`domains ls`)} to see your domains.`);
    return 1;
  }
  if (domain instanceof ERRORS.DomainPermissionDenied) {
    output.error(
      `You don't have permissions over domain ${chalk.underline(
        domain.meta.domain
      )} under ${chalk.bold(domain.meta.context)}.`
    );
    return 1;
  }

  const teams = await getTeams(client);
  const matchId = await findDestinationMatch(destination, user, teams);

  if (matchId && matchId === user.id && user.version === 'northstar') {
    output.error(`You may not move your domain to your user account.`);
    return 1;
  }

  if (!matchId && !opts['--yes']) {
    output.warn(
      `You're not a member of ${param(destination)}. ` +
        `${param(
          destination
        )} will have 24 hours to accept your move request before it expires.`
    );
    if (
      !(await confirm(
        client,
        `Are you sure you want to move ${param(domainName)} to ${param(
          destination
        )}?`,
        false
      ))
    ) {
      output.log('Canceled');
      return 0;
    }
  }

  if (!opts['--yes']) {
    const aliases = await getDomainAliases(client, domainName);
    if (aliases.length > 0) {
      output.warn(
        `This domain's ${chalk.bold(
          plural('alias', aliases.length, true)
        )} will be removed. Run ${getCommandName(`alias ls`)} to list them.`
      );
      if (
        !(await confirm(
          client,
          `Are you sure you want to move ${param(domainName)}?`,
          false
        ))
      ) {
        output.log('Canceled');
        return 0;
      }
    }
  }

  const context = contextName;
  output.spinner('Moving');
  const moveTokenResult = await moveOutDomain(
    client,
    context,
    domainName,
    matchId || destination
  );

  if (moveTokenResult instanceof ERRORS.DomainMoveConflict) {
    const { suffix, pendingAsyncPurchase } = moveTokenResult.meta;
    if (suffix) {
      output.error(
        `Please remove custom suffix for ${param(domainName)} before moving out`
      );
      return 1;
    }

    if (pendingAsyncPurchase) {
      output.error(
        `Cannot remove ${param(
          domain.name
        )} because it is still in the process of being purchased.`
      );
      return 1;
    }

    output.error(moveTokenResult.message);
    return 1;
  }
  if (moveTokenResult instanceof ERRORS.DomainNotFound) {
    output.error(`Domain not found under ${chalk.bold(contextName)}`);
    output.log(`Run ${getCommandName(`domains ls`)} to see your domains.`);
    return 1;
  }
  if (moveTokenResult instanceof ERRORS.DomainPermissionDenied) {
    output.error(
      `You don't have permissions over domain ${chalk.underline(
        moveTokenResult.meta.domain
      )} under ${chalk.bold(moveTokenResult.meta.context)}.`
    );
    return 1;
  }
  if (moveTokenResult instanceof ERRORS.InvalidMoveDestination) {
    output.error(
      `Destination ${chalk.bold(
        destination
      )} is invalid. Please supply a valid username, email, team slug, user id, or team id.`
    );
    return 1;
  }

  const { moved } = moveTokenResult;
  if (moved) {
    output.success(`${param(domainName)} was moved to ${param(destination)}.`);
  } else {
    output.success(
      `Sent ${param(destination)} an email to approve the ${param(
        domainName
      )} move request.`
    );
  }
  return 0;
}

async function getArgs(args: string[]) {
  let [domainName, destination] = args;

  if (!domainName) {
    domainName = await textInput({
      label: `- Domain name: `,
      validateValue: isRootDomain,
    });
  }

  if (!destination) {
    destination = await textInput({
      label: `- Destination: `,
      validateValue: (v: string) => Boolean(v && v.length > 0),
    });
  }

  return { domainName, destination };
}

async function findDestinationMatch(
  destination: string,
  user: User,
  teams: Team[]
) {
  if (user.id === destination || user.username === destination) {
    return user.id;
  }

  for (const team of teams) {
    if (team.id === destination || team.slug === destination) {
      return team.id;
    }
  }

  return null;
}
