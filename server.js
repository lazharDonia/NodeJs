import {createServer} from 'node:http'
const server = createServer((req,res)=>
{
    res.write( '<h1>Hello Node!!!!</h1>\n' )
    res.end()
})
server.listen('3000')