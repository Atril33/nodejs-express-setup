const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'home.html'))
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'contact-me.html'))
})

app.get('*', (req, res) =>{
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(3000, () => {
    console.log('Server is Listening on Port 3000')
})