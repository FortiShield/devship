/*
 * Helper function to support both `@khulnasoft` and legacy `@now` official Runtimes.
 */
export const isOfficialRuntime = (desired: string, name?: string): boolean => {
  if (typeof name !== 'string') {
    return false;
  }
  return (
    name === `@khulnasoft/${desired}` ||
    name === `@now/${desired}` ||
    name.startsWith(`@khulnasoft/${desired}@`) ||
    name.startsWith(`@now/${desired}@`)
  );
};

/*
 * Helper function to detect both `@khulnasoft/static` and legacy `@now/static` official Runtimes.
 */
export const isStaticRuntime = (name?: string): boolean => {
  return isOfficialRuntime('static', name);
};
