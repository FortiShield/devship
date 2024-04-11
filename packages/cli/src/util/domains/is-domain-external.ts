import type { Domain } from '@khulnasoft-internals/types';

export default function isDomainExternal(domain: Domain) {
  return domain.serviceType !== 'zeit.world';
}
