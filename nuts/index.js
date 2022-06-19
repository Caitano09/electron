const express = require('express')
const Nuts = require('nuts-serve').Nuts

const app = express()

const nuts = Nuts({
    repository: 'Caitano09/electron',
    username: 'Caitano09',
    password: '????'
})

app.use('/', nuts.router)
app.listen(4000)