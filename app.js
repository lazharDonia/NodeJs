import {createServer} from 'node: http'
import { findTodo } from './function/todos_storage.js'
import {JSON} from 'node:stream/consumers'
const server = createServer(async(req,res)=>{
    
    res.setHeader('Content-Type', 'application/json')
    const url = new URL(req.url , `http://${req.headers.host}` )
    if(url.pathname==='/todo'){
        if (req.method === 'GET'){
            const todos= await findTodo()
            res.write(JSON.stringify(todos))

        
        }
        else if ( req.method==='POST'){
            const newtodos = await JSON(req)
        }
        
    }else {res.wrietHead(4044)}
    
    res.end()
})
server.listen('3000')