import { writeFile } from 'node:fs/promises'
import { readFile } from 'node:fs/promises'
const file = writeFile('welcom.txt', "hello node")
const data = await readFile ('welcom.txt', {encoding:'utf-8'})
console.log(data);
