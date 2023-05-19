const express = require('express')
const transcriptRoute = require('./routes/transcriptRoute')
const hbs = require('hbs')
const path = require('path')
require('dotenv').config();

const app = express()

// Defining Paths for Express Config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../views')

// setup hbs engine and views
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 1000

app.use(express.json())
app.use(transcriptRoute)

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})