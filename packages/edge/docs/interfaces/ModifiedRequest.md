# Interface: ModifiedRequest

## Table of contents

### Properties

- [headers](ModifiedRequest.md#headers)

## Properties

### headers

• `Optional` **headers**: [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers)

If set, overwrites the incoming headers to the origin request.

This is useful when you want to pass data between a Middleware and a
Serverless or Edge Function.

**`Example`**

<caption>Add a `x-user-id` header and remove the `Authorization` header</caption>

```ts
import { rewrite } from '@khulnasoft/edge';
export default async function middleware(request: Request): Promise<Response> {
  const newHeaders = new Headers(request.headers);
  newHeaders.set('x-user-id', 'user_123');
  newHeaders.delete('authorization');
  return rewrite(request.url, {
    request: { headers: newHeaders },
  });
}
```

#### Defined in

[packages/edge/src/middleware-helpers.ts:23](https://github.com/khulnasoft/devship/blob/main/packages/edge/src/middleware-helpers.ts#L23)
