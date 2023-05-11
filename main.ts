import initSwc, { transformSync } from "https://esm.sh/@swc/wasm-web@1.3.57";

await initSwc();
const result = transformSync(`console.log('hello')`, {});
console.log(result);
