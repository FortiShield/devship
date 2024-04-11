import assert from 'assert';
import { getPlatformEnv } from '../src';

describe('Test `getPlatformEnv()`', () => {
  it('should support `KHULNASOFT_` prefix', () => {
    try {
      assert.equal(undefined, getPlatformEnv('FOO'));

      process.env.KHULNASOFT_FOO = 'bar';
      assert.equal('bar', getPlatformEnv('FOO'));
    } finally {
      delete process.env.KHULNASOFT_FOO;
    }
  });

  it('should support `NOW_` prefix', () => {
    try {
      assert.equal(undefined, getPlatformEnv('FOO'));

      process.env.NOW_FOO = 'bar';
      assert.equal('bar', getPlatformEnv('FOO'));
    } finally {
      delete process.env.NOW_FOO;
    }
  });

  it('should throw an error if both env vars exist', () => {
    let err: Error | null = null;
    try {
      process.env.NOW_FOO = 'bar';
      process.env.KHULNASOFT_FOO = 'baz';
      getPlatformEnv('FOO');
    } catch (_err: unknown) {
      err = _err as Error;
    } finally {
      delete process.env.NOW_FOO;
      delete process.env.KHULNASOFT_FOO;
    }
    assert(err);
    assert.equal(
      err!.message,
      'Both "KHULNASOFT_FOO" and "NOW_FOO" env vars are defined. Please only define the "KHULNASOFT_FOO" env var.'
    );
  });
});
