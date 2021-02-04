// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.status= 200;
//     res.setHeader= ('Content-type', 'text/plain');
//     res.end('Final resposta');
// });


// server.listen(3000,()=>{
//     console.log('Servidor a port 3000');
// });


const express = require('express');


const app = express();

//console.log(app);

app.get('/',(req,res)=>{
    res.send('Hola');//aixo envia un resposta a una peticio
});

//sense aixo mos sortira error perque sa pagina mos demana una peticio i noltros no li tornam cap resposta 


app.get('/about',(req,res)=>{
    res.send('Som en Miquel Umbert')
})

app.get('/contact',(req,res)=>{
    res.send('From contact')
});

app.get('/test',(req,res)=>{
    res.send('Test fet');
})


app.listen(5000,()=>{
    console.log('Servidor en port 5000');
});



