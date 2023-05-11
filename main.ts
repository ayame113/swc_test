import initSwc_, { transformSync } from "npm:@swc/wasm-web@1.3.57";

const initSwc = initSwc_.default;
await initSwc();
const result = transformSync(`console.log('hello')`, {});
console.log(result);
