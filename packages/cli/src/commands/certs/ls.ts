import chalk from 'chalk';
import ms from 'ms';
import table from '../../util/output/table';
import Client from '../../util/client';
import getScope from '../../util/get-scope';
import {
  PaginationOptions,
  getPaginationOpts,
} from '../../util/get-pagination-opts';
import stamp from '../../util/output/stamp';
import getCerts from '../../util/certs/get-certs';
import type { Cert } from '@khulnasoft-internals/types';
import getCommandFlags from '../../util/get-command-flags';
import { getCommandName } from '../../util/pkg-name';

async function ls(
  client: Client,
  opts: PaginationOptions,
  args: string[]
): Promise<number> {
  const { output } = client;
  const { contextName } = await getScope(client);

  let paginationOptions;

  try {
    paginationOptions = getPaginationOpts(opts);
  } catch (err: unknown) {
    output.prettyError(err);
    return 1;
  }

  const lsStamp = stamp();

  if (args.length !== 0) {
    output.error(
      `Invalid number of arguments. Usage: ${chalk.cyan(
        `${getCommandName('certs ls')}`
      )}`
    );
    return 1;
  }

  // Get the list of certificates
  const { certs, pagination } = await getCerts(client, ...paginationOptions);

  output.log(
    `${
      certs.length > 0 ? 'Certificates' : 'No certificates'
    } found under ${chalk.bold(contextName)} ${lsStamp()}`
  );

  if (certs.length > 0) {
    client.stdout.write(formatCertsTable(certs));
  }

  if (pagination && pagination.count === 20) {
    const flags = getCommandFlags(opts, ['_', '--next']);
    output.log(
      `To display the next page run ${getCommandName(
        `certs ls${flags} --next ${pagination.next}`
      )}`
    );
  }

  return 0;
}

function formatCertsTable(certsList: Cert[]) {
  return `${table(
    [formatCertsTableHead(), ...formatCertsTableBody(certsList)],
    { align: ['l', 'l', 'r', 'c', 'r'], hsep: 2 }
  ).replace(/^(.*)/gm, '  $1')}\n`;
}

function formatCertsTableHead(): string[] {
  return [
    chalk.dim('id'),
    chalk.dim('cns'),
    chalk.dim('expiration'),
    chalk.dim('renew'),
    chalk.dim('age'),
  ];
}

function formatCertsTableBody(certsList: Cert[]) {
  const now = new Date();
  return certsList.reduce<string[][]>(
    (result, cert) => result.concat(formatCert(now, cert)),
    []
  );
}

function formatCert(time: Date, cert: Cert) {
  return cert.cns.map((cn, idx) =>
    idx === 0
      ? formatCertFirstCn(time, cert, cn, cert.cns.length > 1)
      : formatCertNonFirstCn(cn, cert.cns.length > 1)
  );
}

function formatCertNonFirstCn(cn: string, multiple: boolean): string[] {
  return ['', formatCertCn(cn, multiple), '', '', ''];
}

function formatCertCn(cn: string, multiple: boolean) {
  return multiple ? `${chalk.gray('-')} ${chalk.bold(cn)}` : chalk.bold(cn);
}

function formatCertFirstCn(
  time: Date,
  cert: Cert,
  cn: string,
  multiple: boolean
): string[] {
  return [
    cert.uid,
    formatCertCn(cn, multiple),
    formatExpirationDate(new Date(cert.expiration)),
    cert.autoRenew ? 'yes' : 'no',
    chalk.gray(ms(time.getTime() - new Date(cert.created).getTime())),
  ];
}

function formatExpirationDate(date: Date) {
  const diff = date.getTime() - Date.now();
  return diff < 0
    ? chalk.gray(`${ms(-diff)} ago`)
    : chalk.gray(`in ${ms(diff)}`);
}

export default ls;
