const users = require('../mocks/users')

module.exports = {
    listUsers(req, res){

        const response = JSON.stringify(users)
        
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(response)
    }
}