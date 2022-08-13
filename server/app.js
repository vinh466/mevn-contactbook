const express = require('express');
const cors = require('cors');
const errorHandler = require('./app/middlewares/errorHandler.mdw');

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'success'
    })
})

app.use(errorHandler.errorHandle404)
app.use(errorHandler.errorHandleLast)

module.exports = app;
