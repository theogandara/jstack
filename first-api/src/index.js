const http = require('http')
const users = require('../mocks/users')

const server = http.createServer((req, res) => {
    console.log("Method: " + req.method + ' | ' + 'Endpoint: ' + req.url )

    if(req.url === '/users' && req.method === 'GET'){

        const response = JSON.stringify(users)

        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(response)
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end(`Cannot ${req.method} ${req.url}`)
    }
})

const PORT = 3001

server.listen(PORT , ()=> console.log('🔥 Rodando na porta ' + PORT))