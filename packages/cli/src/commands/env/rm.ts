import chalk from 'chalk';
import type { Project } from '@khulnasoft-internals/types';
import { Output } from '../../util/output';
import confirm from '../../util/input/confirm';
import removeEnvRecord from '../../util/env/remove-env-record';
import getEnvRecords from '../../util/env/get-env-records';
import formatEnvTarget from '../../util/env/format-env-target';
import {
  isValidEnvTarget,
  getEnvTargetPlaceholder,
} from '../../util/env/env-target';
import Client from '../../util/client';
import stamp from '../../util/output/stamp';
import param from '../../util/output/param';
import { emoji, prependEmoji } from '../../util/emoji';
import { isKnownError } from '../../util/env/known-error';
import { getCommandName } from '../../util/pkg-name';
import { isAPIError } from '../../util/errors-ts';

type Options = {
  '--debug': boolean;
  '--yes': boolean;
};

export default async function rm(
  client: Client,
  project: Project,
  opts: Partial<Options>,
  args: string[],
  output: Output
) {
  if (args.length > 3) {
    output.error(
      `Invalid number of arguments. Usage: ${getCommandName(
        `env rm <name> ${getEnvTargetPlaceholder()} <gitbranch>`
      )}`
    );
    return 1;
  }

  let [envName, envTarget, envGitBranch] = args;

  if (!envName) {
    envName = await client.input.text({
      message: `What’s the name of the variable?`,
      validate: val => (val ? true : 'Name cannot be empty'),
    });
  }

  if (!isValidEnvTarget(envTarget)) {
    output.error(
      `The Environment ${param(
        envTarget
      )} is invalid. It must be one of: ${getEnvTargetPlaceholder()}.`
    );
    return 1;
  }

  const result = await getEnvRecords(
    output,
    client,
    project.id,
    'vercel-cli:env:rm',
    {
      target: envTarget,
      gitBranch: envGitBranch,
    }
  );

  let envs = result.envs.filter(env => env.key === envName);

  if (envs.length === 0) {
    output.error(`Environment Variable was not found.\n`);
    return 1;
  }

  while (envs.length > 1) {
    const id = await client.input.select({
      message: `Remove ${envName} from which Environments?`,
      choices: envs.map(env => ({ value: env.id, name: formatEnvTarget(env) })),
    });

    if (!id) {
      output.error('Please select at least one Environment Variable to remove');
    }
    envs = envs.filter(env => env.id === id);
  }
  const env = envs[0];

  const skipConfirmation = opts['--yes'];
  if (
    !skipConfirmation &&
    !(await confirm(
      client,
      `Removing Environment Variable ${param(env.key)} from ${formatEnvTarget(
        env
      )} in Project ${chalk.bold(project.name)}. Are you sure?`,
      false
    ))
  ) {
    output.log('Canceled');
    return 0;
  }

  const rmStamp = stamp();

  try {
    output.spinner('Removing');
    await removeEnvRecord(output, client, project.id, env);
  } catch (err: unknown) {
    if (isAPIError(err) && isKnownError(err)) {
      output.error(err.serverMessage);
      return 1;
    }
    throw err;
  }

  output.print(
    `${prependEmoji(
      `Removed Environment Variable ${chalk.gray(rmStamp())}`,
      emoji('success')
    )}\n`
  );

  return 0;
}
