const express = require('express');
const cors = require('cors');
const errorHandler = require('./app/middlewares/errorHandler.mdw');
const contactsRouter = require('./app/routes/contact.route')

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'success'
    })
})
app.use("/api/contacts", contactsRouter)

app.use(errorHandler.errorHandle404)
app.use(errorHandler.errorHandleLast)

module.exports = app;
