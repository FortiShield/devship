# @khulnasoft/remix-builder

## 2.1.5

### Patch Changes

- Add `mjs` and `mts` extensions to vite detection ([#11307](https://github.com/khulnasoft/devship/pull/11307))

## 2.1.4

### Patch Changes

- Disable `prepareCache()` npm install for Remix + Vite ([#11281](https://github.com/khulnasoft/devship/pull/11281))

## 2.1.3

### Patch Changes

- Improve hueristics for detecting Remix + Vite ([#11256](https://github.com/khulnasoft/devship/pull/11256))

## 2.1.2

### Patch Changes

- Update `@remix-run/dev` fork to v2.8.1 ([#11241](https://github.com/khulnasoft/devship/pull/11241))

## 2.1.1

### Patch Changes

- [build-utils] increase max memory limit ([#11209](https://github.com/khulnasoft/devship/pull/11209))

- Remove usage of `ensureResolvable()` in Vite builds ([#11213](https://github.com/khulnasoft/devship/pull/11213))

- Update `@remix-run/dev` fork to v2.8.0 ([#11206](https://github.com/khulnasoft/devship/pull/11206))

- Ensure the symlink directory exists in `ensureSymlink()` ([#11205](https://github.com/khulnasoft/devship/pull/11205))

## 2.1.0

### Minor Changes

- Remix Vite plugin support ([#11031](https://github.com/khulnasoft/devship/pull/11031))

## 2.0.20

### Patch Changes

- Don't install Remix fork when not using split configuration ([#11152](https://github.com/khulnasoft/devship/pull/11152))

- Add `serverBundles` post-build sanity check and fallback ([#11153](https://github.com/khulnasoft/devship/pull/11153))

- bump `@khulnasoft/nft@0.26.4` ([#11155](https://github.com/khulnasoft/devship/pull/11155))

- Update `@remix-run/dev` fork to v2.6.0 ([#11162](https://github.com/khulnasoft/devship/pull/11162))

- Update `@remix-run/dev` fork to v2.7.0 ([#11180](https://github.com/khulnasoft/devship/pull/11180))

- Update `@remix-run/dev` fork to v2.7.2 ([#11186](https://github.com/khulnasoft/devship/pull/11186))

## 2.0.19

### Patch Changes

- [node][next][redwood][remix] bump `@khulnasoft/nft@0.26.3` ([#11115](https://github.com/khulnasoft/devship/pull/11115))

## 2.0.18

### Patch Changes

- Fix functions without a output path edge case ([#11038](https://github.com/khulnasoft/devship/pull/11038))

- Update `@remix-run/dev` fork to v2.5.0 ([#11054](https://github.com/khulnasoft/devship/pull/11054))

- Update `@remix-run/dev` fork to v2.5.1 ([#11065](https://github.com/khulnasoft/devship/pull/11065))

## 2.0.17

### Patch Changes

- Deprecate `EdgeFunction#name` property ([#11010](https://github.com/khulnasoft/devship/pull/11010))

## 2.0.16

### Patch Changes

- [next][node][redwood][remix] Bump `@khulnasoft/nft@0.26.1` ([#11009](https://github.com/khulnasoft/devship/pull/11009))

- Update `@remix-run/dev` fork to v2.4.1 ([#10992](https://github.com/khulnasoft/devship/pull/10992))

## 2.0.15

### Patch Changes

- Update `@remix-run/dev` fork to v2.4.0 ([#10943](https://github.com/khulnasoft/devship/pull/10943))

## 2.0.14

### Patch Changes

- Reinstall dependencies during `prepareCache()` ([#10922](https://github.com/khulnasoft/devship/pull/10922))

## 2.0.13

### Patch Changes

- Update `@remix-run/dev` fork to v2.3.1 ([#10908](https://github.com/khulnasoft/devship/pull/10908))

## 2.0.12

### Patch Changes

- Fix issue where `npm install` was not properly injecting forked compiler ([#10819](https://github.com/khulnasoft/devship/pull/10819))

- Simplify static directory resolution and apply `publicPath` to routes. ([#10685](https://github.com/khulnasoft/devship/pull/10685))

## 2.0.11

### Patch Changes

- Update `@remix-run/dev` fork to v2.2.0 ([#10788](https://github.com/khulnasoft/devship/pull/10788))

## 2.0.10

### Patch Changes

- Update `@remix-run/dev` fork to v2.1.0 ([#10732](https://github.com/khulnasoft/devship/pull/10732))

## 2.0.9

### Patch Changes

- Revert "[next][node][redwood][remix] Update @khulnasoft/nft (#10540)" ([#10633](https://github.com/khulnasoft/devship/pull/10633))

- Update `@khulnasoft/nft` to 0.24.2 ([#10644](https://github.com/khulnasoft/devship/pull/10644))

## 2.0.8

### Patch Changes

- Update `@remix-run/dev` fork to v2.0.1 ([#10566](https://github.com/khulnasoft/devship/pull/10566))

## 2.0.7

### Patch Changes

- Update `@khulnasoft/nft` to v0.24.1. ([#10540](https://github.com/khulnasoft/devship/pull/10540))

## 2.0.6

### Patch Changes

- Fix ESM mode for Edge runtime ([#10530](https://github.com/khulnasoft/devship/pull/10530))

- Update `@remix-run/dev` fork to v2.0.0 ([#10526](https://github.com/khulnasoft/devship/pull/10526))

- Fixes for Remix v2 ([#10525](https://github.com/khulnasoft/devship/pull/10525))

## 2.0.5

### Patch Changes

- Fix usage with `bun install` ([#10489](https://github.com/khulnasoft/devship/pull/10489))

## 2.0.4

### Patch Changes

- Use `build-builder.mjs` script to bundle, and remove types and source maps ([#10479](https://github.com/khulnasoft/devship/pull/10479))

## 2.0.3

### Patch Changes

- Updated semver dependency ([#10411](https://github.com/khulnasoft/devship/pull/10411))

- Updated dependencies [[`5609a1187`](https://github.com/khulnasoft/devship/commit/5609a1187be9d6cf8d5f16825690c5ea72f17dc5), [`1b4de4a98`](https://github.com/khulnasoft/devship/commit/1b4de4a986f7a612aac834ebae3ec7bb9e9b8cf8)]:
  - @khulnasoft/build-utils@7.1.1

## 2.0.2

### Patch Changes

- Updated dependencies [[`9e3827c78`](https://github.com/khulnasoft/devship/commit/9e3827c785e1bc45f2bed421132167381481770f)]:
  - @khulnasoft/build-utils@7.1.0

## 2.0.1

### Patch Changes

- Update `@remix-run/dev` fork to v1.19.3 ([#10381](https://github.com/khulnasoft/devship/pull/10381))

## 2.0.0

### Major Changes

- BREAKING CHANGE: Drop Node.js 14, bump minimum to Node.js 16 ([#10369](https://github.com/khulnasoft/devship/pull/10369))

### Patch Changes

- Only add workspace check flag for Yarn v1 ([#10364](https://github.com/khulnasoft/devship/pull/10364))

- Updated dependencies [[`37f5c6270`](https://github.com/khulnasoft/devship/commit/37f5c6270058336072ca733673ea72dd6c56bd6a)]:
  - @khulnasoft/build-utils@7.0.0
  - @khulnasoft/static-config@3.0.0

## 1.10.1

### Patch Changes

- Set default env vars for Hydrogen v2 deployments ([#10341](https://github.com/khulnasoft/devship/pull/10341))

## 1.10.0

### Minor Changes

- Add initial support for Hydrogen v2 ([#10305](https://github.com/khulnasoft/devship/pull/10305))

### Patch Changes

- Update `@remix-run/dev` fork to v1.19.2 ([#10299](https://github.com/khulnasoft/devship/pull/10299))

- Updated dependencies [[`a8ecf40d6`](https://github.com/khulnasoft/devship/commit/a8ecf40d6f50e2fc8b13b02c8ef50b3dcafad3a6)]:
  - @khulnasoft/build-utils@6.8.3

## 1.9.1

### Patch Changes

- Disable root workspace check in pnpm and yarn when adding deps ([#10291](https://github.com/khulnasoft/devship/pull/10291))

## 1.9.0

### Minor Changes

- Install `@vercel/remix-run-dev` at build-time instead of using symlink ([#9784](https://github.com/khulnasoft/devship/pull/9784))

### Patch Changes

- Update `@remix-run/dev` fork to v1.19.1 ([#10246](https://github.com/khulnasoft/devship/pull/10246))

## 1.8.18

### Patch Changes

- Create ensured dependency symlink at the `start` directory, instead of root of repo ([#10224](https://github.com/khulnasoft/devship/pull/10224))

## 1.8.17

### Patch Changes

- Updated dependencies [[`0750517af`](https://github.com/khulnasoft/devship/commit/0750517af99aea41410d4f1f772ce427699554e7)]:
  - @khulnasoft/build-utils@6.8.2

## 1.8.16

### Patch Changes

- Update `@remix-run/dev` fork to v1.18.1 ([#10180](https://github.com/khulnasoft/devship/pull/10180))

- Updated dependencies [[`7021279b2`](https://github.com/khulnasoft/devship/commit/7021279b284f314a4d1bdbb4306b4c22291efa08)]:
  - @khulnasoft/build-utils@6.8.1

## 1.8.15

### Patch Changes

- Update `@remix-run/dev` fork to v1.18.0 ([#10146](https://github.com/khulnasoft/devship/pull/10146))

- Updated dependencies [[`346892210`](https://github.com/khulnasoft/devship/commit/3468922108f411482a72acd0331f0f2ee52a6d4c)]:
  - @khulnasoft/build-utils@6.8.0

## 1.8.14

### Patch Changes

- Link to `https://vercel.com/help` ([#10106](https://github.com/khulnasoft/devship/pull/10106))

## 1.8.13

### Patch Changes

- Update `@remix-run/dev` fork to v1.17.0 ([#10072](https://github.com/khulnasoft/devship/pull/10072))

## 1.8.12

### Patch Changes

- Updated dependencies [[`cd35071f6`](https://github.com/khulnasoft/devship/commit/cd35071f609d615d47bc04634c123b33768436cb)]:
  - @khulnasoft/build-utils@6.7.5

## 1.8.11

### Patch Changes

- Updated dependencies [[`c7bcea408`](https://github.com/khulnasoft/devship/commit/c7bcea408131df2d65338e50ce319a6d8e4a8a82)]:
  - @khulnasoft/build-utils@6.7.4

## 1.8.10

### Patch Changes

- Updated dependencies [[`71b9f3a94`](https://github.com/khulnasoft/devship/commit/71b9f3a94b7922607f8f24bf7b2bd1742e62cc05)]:
  - @khulnasoft/build-utils@6.7.3

## 1.8.9

### Patch Changes

- Upgrade `@remix-run/dev` fork to v1.16.1 ([#9971](https://github.com/khulnasoft/devship/pull/9971))

## 1.8.8

### Patch Changes

- Upgrade `@remix-run/dev` to v1.16.0-patch.1 to fix erroneous "not found in your node_modules" warning ([#9930](https://github.com/khulnasoft/devship/pull/9930))
