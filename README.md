Test bundlers. To run them:
```bash
# esbuild
pnpm esbuild src/index.ts --bundle --minify  > dist/esbuild.js
# swc
npx spack  src/index.ts
# webpack
pnpm tsc src/index.ts &&  pnpm webpack -o ./dist/webpack ./src/index.js --mode production
````
