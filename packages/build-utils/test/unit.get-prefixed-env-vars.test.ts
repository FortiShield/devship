import { getPrefixedEnvVars } from '../src';

describe('Test `getPrefixedEnvVars()`', () => {
  const cases: Array<{
    name: string;
    args: Parameters<typeof getPrefixedEnvVars>[0];
    want: ReturnType<typeof getPrefixedEnvVars>;
  }> = [
    {
      name: 'should work with NEXT_PUBLIC_',
      args: {
        envPrefix: 'NEXT_PUBLIC_',
        envs: {
          KHULNASOFT: '1',
          KHULNASOFT_URL: 'example.vercel.sh',
          KHULNASOFT_ENV: 'production',
          KHULNASOFT_BRANCH_URL: 'example-git-main-acme.vercel.app',
          USER_ENV_VAR_NOT_KHULNASOFT: 'example.com',
          KHULNASOFT_ARTIFACTS_TOKEN: 'abc123',
          FOO: 'bar',
        },
      },
      want: {
        NEXT_PUBLIC_KHULNASOFT_URL: 'example.vercel.sh',
        NEXT_PUBLIC_KHULNASOFT_ENV: 'production',
        NEXT_PUBLIC_KHULNASOFT_BRANCH_URL: 'example-git-main-acme.vercel.app',
        TURBO_CI_VENDOR_ENV_KEY: 'NEXT_PUBLIC_KHULNASOFT_',
      },
    },
    {
      name: 'should work with GATSBY_',
      args: {
        envPrefix: 'GATSBY_',
        envs: {
          USER_ENV_VAR_NOT_KHULNASOFT: 'example.com',
          KHULNASOFT_ARTIFACTS_TOKEN: 'abc123',
          FOO: 'bar',
          KHULNASOFT_URL: 'example.vercel.sh',
          KHULNASOFT_ENV: 'production',
          KHULNASOFT_REGION: 'iad1',
          KHULNASOFT_GIT_COMMIT_AUTHOR_LOGIN: 'rauchg',
        },
      },
      want: {
        GATSBY_KHULNASOFT_URL: 'example.vercel.sh',
        GATSBY_KHULNASOFT_ENV: 'production',
        GATSBY_KHULNASOFT_REGION: 'iad1',
        GATSBY_KHULNASOFT_GIT_COMMIT_AUTHOR_LOGIN: 'rauchg',
        TURBO_CI_VENDOR_ENV_KEY: 'GATSBY_KHULNASOFT_',
      },
    },
    {
      name: 'should not return anything if no system env vars detected',
      args: {
        envPrefix: 'GATSBY_',
        envs: {
          USER_ENV_VAR_NOT_KHULNASOFT: 'example.com',
          FOO: 'bar',
          BLARG_KHULNASOFT_THING: 'fake',
          KHULNASOFT_ARTIFACTS_TOKEN: 'abc123',
        },
      },
      want: {},
    },
    {
      name: 'should not return anything if envPrefix is empty string',
      args: {
        envPrefix: '',
        envs: {
          KHULNASOFT: '1',
          KHULNASOFT_URL: 'example.vercel.sh',
        },
      },
      want: {},
    },
    {
      name: 'should not return anything if envPrefix is undefined',
      args: {
        envPrefix: undefined,
        envs: {
          KHULNASOFT: '1',
          KHULNASOFT_URL: 'example.vercel.sh',
        },
      },
      want: {},
    },
  ];

  for (const { name, args, want } of cases) {
    it(name, () => {
      expect(getPrefixedEnvVars(args)).toEqual(want);
    });
  }
});
