import { getPlatformEnv } from './get-platform-env';

export default function debug(message: string, ...additional: any[]) {
  if (getPlatformEnv('BUILDER_DEBUG')) {
    console.log(message, ...additional);
  } else if (process.env.KHULNASOFT_DEBUG_PREFIX) {
    console.log(`${process.env.KHULNASOFT_DEBUG_PREFIX}${message}`, ...additional);
  }
}
