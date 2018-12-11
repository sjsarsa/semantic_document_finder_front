const express = require('express')
const path = require('path')
const app = express()

app.use('/document-finder', express.static(path.join(__dirname, 'build')))

app.get('/document-finder*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(5000)