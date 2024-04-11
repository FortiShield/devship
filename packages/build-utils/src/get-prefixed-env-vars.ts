type Envs = { [key: string]: string | undefined };

/**
 * Get the framework-specific prefixed System Environment Variables.
 * See https://khulnasoft.com/docs/concepts/projects/environment-variables#system-environment-variables
 * @param envPrefix - Prefix, typically from `@khulnasoft/frameworks`
 * @param envs - Environment Variables, typically from `process.env`
 */
export function getPrefixedEnvVars({
  envPrefix,
  envs,
}: {
  envPrefix: string | undefined;
  envs: Envs;
}): Envs {
  const vercelSystemEnvPrefix = 'KHULNASOFT_';
  const allowed = [
    'KHULNASOFT_URL',
    'KHULNASOFT_ENV',
    'KHULNASOFT_REGION',
    'KHULNASOFT_BRANCH_URL',
  ];
  const newEnvs: Envs = {};
  if (envPrefix && envs.KHULNASOFT_URL) {
    Object.keys(envs)
      .filter(key => allowed.includes(key) || key.startsWith('KHULNASOFT_GIT_'))
      .forEach(key => {
        const newKey = `${envPrefix}${key}`;
        if (!(newKey in envs)) {
          newEnvs[newKey] = envs[key];
        }
      });
    // Tell turbo to exclude all Vercel System Env Vars
    // See https://github.com/vercel/turborepo/pull/1622
    newEnvs.TURBO_CI_VENDOR_ENV_KEY = `${envPrefix}${vercelSystemEnvPrefix}`;
  }
  return newEnvs;
}
