const porta = 3003

const express = require('express')
const app = express() //instanciando Express.js

app.post('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) //Converter para JSON
})

app.listen(porta, () => {
    console.log(`servidor está executando na porta ${porta}.`)
})