const express = require('express')

const app = express();
const mongoURI = 'mongodb+srv://admin:sameershekhar@cluster0.hkvps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.get('/', (req, res) => {

})

app.listen(3000, () => {
    console.log('Listining on port 3000')
})