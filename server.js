const express = require('express')
const app =express()
const sucket = require('socket.io')


app.use(express.static(__dirname + '/public'))


const server = app.listen(3500, ()=> console.log('sever run on ' + 3500))

const io = sucket(server)
