# RSC-ENV

Inspired by the brilliant [`esm-env`](https://github.com/benmccann/esm-env?tab=readme-ov-file)

Uses export conditions to return if the current environment is `react-server` or not. Bundlers can statically determine the environment at build time & remove dead code.

This is useful for writing utility functions that may be called by either server or client components.

## Example

```bash
npm install rsc-env
```

```ts
// utils/shared.ts
import { rsc } from "rsc-env";

// This code will be treeshaken from client-component builds
if(rsc) console.log("I'm running in a server component")
```

## License

[MIT](./LICENSE.md)
