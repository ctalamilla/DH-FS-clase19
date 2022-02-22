const express = require('express');

const app = express();

const mainRoutes = require('./routes/mainRoutes.js')

app.use(express.static('public'));

app.use(mainRoutes);

app.listen( 3000, ()=>{
    console.log('Server Funcionando en 3000')
});



