require("./models/User")
require("./models/Track")
const express = require("express")
const bodyParser = require('body-parser')
const trackRoutes = require('./routes/trackRoutes')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoute.js')
const requireAuth = require('./middlewares/RequireAuth')

const app = express();
app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)


const mongoURI = 'mongodb+srv://admin:sameershekhar@cluster0.hkvps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI)
mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo Instance')
})
mongoose.connection.on('error', (err) => {
    console.log('Error', err);
})

app.get('/', requireAuth, (req, res) => {

    res.send(`Your email is: ${req.user.email}`)
})

app.listen(3000, () => {
    console.log('Listining on port 3000')
})