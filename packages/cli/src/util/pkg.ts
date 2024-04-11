import { getPackageJSON } from '@khulnasoft-internals/get-package-json';

export default getPackageJSON() as typeof import('../../package.json');
