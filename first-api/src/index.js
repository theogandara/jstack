const http = require('http')
const routes = require('./routes')

const server = http.createServer((req, res) => {
    console.log("Method: " + req.method + ' | ' + 'Endpoint: ' + req.url )

    const route = routes.find((route) => route.endpoint === req.url && route.method === req.method)

    if(route){
        route.handler(req, res)
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end(`Cannot ${req.method} ${req.url}`)
    }
})

const PORT = 3001

server.listen(PORT , ()=> console.log('🔥 Rodando na porta ' + PORT))