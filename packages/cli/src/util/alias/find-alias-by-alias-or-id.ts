import { Output } from '../output';
import type { Alias } from '@khulnasoft-internals/types';

import Client from '../client';

export default async function findAliasByAliasOrId(
  output: Output,
  client: Client,
  aliasOrId: string
) {
  return client.fetch<Alias | null>(
    `/now/aliases/${encodeURIComponent(getSafeAlias(aliasOrId))}`
  );
}
function getSafeAlias(alias: string) {
  return alias
    .replace(/^https:\/\//i, '')
    .replace(/^\.+/, '')
    .replace(/\.+$/, '')
    .toLowerCase();
}
