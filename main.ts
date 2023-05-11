import { transform } from "https://esm.sh/@swc/core@1.3.57";

// import {} from "https://esm.sh/@swc/core@1.3.57/spack";

// await initSwc();
const result = await transform(`console.log('hello')`, {});
console.log(result); // { code: 'console.log("hello");\n' }
