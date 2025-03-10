import assert from 'assert';
import { isOfficialRuntime, isStaticRuntime } from '../src';

describe('Test `isOfficialRuntime()`', () => {
  it('should be correct', () => {
    assert.equal(true, isOfficialRuntime('static', '@khulnasoft/static'));
    assert.equal(true, isOfficialRuntime('static', '@now/static'));
    assert.equal(false, isOfficialRuntime('static', '@khulnasoft/static-build'));
    assert.equal(false, isOfficialRuntime('static', '@now/static-build'));

    assert.equal(true, isOfficialRuntime('node', '@khulnasoft/node'));
    assert.equal(true, isOfficialRuntime('node', '@now/node'));
    assert.equal(true, isOfficialRuntime('node', '@khulnasoft/node@1.0.0'));
    assert.equal(true, isOfficialRuntime('node', '@now/node@1.0.0'));
    assert.equal(false, isOfficialRuntime('node', '@my-fork/node'));
    assert.equal(false, isOfficialRuntime('node', '@now/node-server'));

    assert.equal(
      true,
      isOfficialRuntime('static-build', '@khulnasoft/static-build')
    );
    assert.equal(true, isOfficialRuntime('static-build', '@now/static-build'));
    assert.equal(
      true,
      isOfficialRuntime('static-build', '@khulnasoft/static-build@1.0.0')
    );
    assert.equal(false, isOfficialRuntime('static-build', '@khulnasoft/static'));
    assert.equal(false, isOfficialRuntime('static-build', '@now/static'));
  });
});

describe('Test `isStaticRuntime()`', () => {
  it('should be correct', () => {
    assert.equal(true, isStaticRuntime('@khulnasoft/static'));
    assert.equal(true, isStaticRuntime('@now/static'));
    assert.equal(false, isStaticRuntime('@khulnasoft/static-build'));
    assert.equal(false, isStaticRuntime('@now/static-build'));
    assert.equal(false, isStaticRuntime('@now/node'));
  });
});
