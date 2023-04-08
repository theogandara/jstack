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


        const response = sortedUsers
        
        res.send(200, response)
    },

    getUserById(req, res){
        
        let { id } = req.params

        const user = users.find(user => user.id === Number(id))

        const response = user

        
        if(!response){
            const notFoundResponse = {error: `user ${id} not found`}

            res.send(400, notFoundResponse)
        }
        
        res.send(200, response)
    }
}