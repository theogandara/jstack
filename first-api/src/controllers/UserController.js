const users = require('../mocks/users')

module.exports = {
    listUsers(req, res){
        
        const { order } = req.query

        const sortedUsers = users.sort((prevElement, nextElement) => {

            if(order === 'desc'){

                return prevElement.id < nextElement.id ? 1 : -1
            }

            return prevElement.id > nextElement.id ? 1 : -1
        })


        const response = JSON.stringify(sortedUsers)
        
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(response)
    }
}