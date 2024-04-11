import { RemixServer } from '@remix-run/react';
import { handleRequest } from '@khulnasoft/remix';

export default function (
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const remixServer = <RemixServer context={remixContext} url={request.url} />;
  return handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  );
}
