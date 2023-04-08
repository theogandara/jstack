const http = require('http')
const routes = require('./routes')

const server = http.createServer((req, res) => {

    const parsedUrl = new URL(`http://localhost${req.url}`)

    const route = routes.find((route) => route.endpoint === parsedUrl.pathname && route.method === req.method)

    if(route){
        req.query = Object.fromEntries(parsedUrl.searchParams)
        route.handler(req, res)
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end(`Cannot ${req.method} ${parsedUrl.pathname}`)
    }
})

const PORT = 3001

server.listen(PORT , () => console.log(`🔥 Rodando na porta ${PORT}` ))