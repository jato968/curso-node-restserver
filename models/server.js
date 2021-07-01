const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());                       // origentes
        this.app.use(express.json());               // body en json
        this.app.use(express.static('public'));     // static
    }

    routes() {
        this.app.use('/api/users', require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto: ', this.port)
        })
    }

}

module.exports = Server;