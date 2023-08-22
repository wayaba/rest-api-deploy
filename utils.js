import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
console.log(import.meta.url)
export const readJSON = (path) => require(path)
