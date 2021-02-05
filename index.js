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

const morgan= require('morgan');

//console.log(app);

// function logger(req,res,next){
//     console.log(`Ruta rebuda ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }

app.use(express.json());
//perque express pugui entendre el format json que li arribi

//app.use(logger);
app.use(morgan('dev'));


// app.get('/',(req,res)=>{//get es per retornar coses
//     res.send('Hola');//aixo envia un resposta a una peticio
// });

//sense aixo mos sortira error perque sa pagina mos demana una peticio i noltros no li tornam cap resposta 

app.all('/user',(req,res,next)=>{
    console.log('Pas per aqui');
    //res.send('acabat');
    next(); 
});//per qualsevol ruta(user exemple), primer passa per aqui

app.get('/user',(req,res)=>{
    //res.send('Miquel');
    res.json({
        username: 'Miquel',
        lastname: 'Umbert'
    });
});

app.post('/user/:id', ( req,res ) => {
    
    console.log(req.body);//aixo ho vorem per terminal, necessitarem la funcio app.use(express.json()); perque el programa ho pugui veure
    //req.body-> cos de la peticio: informacio del client que ens envia
    console.log(req.params);//ens ensenya el id del user
    //req.params-> parametres de la peticio: informacio de recursos
    res.send('Peticio rebuda');
});


//encara que esteim a sa mateixa ruta, no utilitzam mateixes formes(get, post)


app.post('/about',(req,res)=>{//rebre dades i ficar-ho a una base de dades i fer algo amb elles i retornar algo
    res.send('Som en Miquel Umbert')
})

app.put('/contact/:id',(req,res)=>{//rebre dades del frontend i actualitzar dades o algo i retornar algo
    res.send(`User  ${req.params.id} updated`)
    console.log(req.body);

});

app.delete('/test',(req,res)=>{//eliminar dades del ser servidor i retornar algo
    res.send('Test fet');
})

app.delete('/user/:userID',(req,res)=>{//eliminar dades del ser servidor i retornar algo
    res.send(`User ${req.params.userID} deleted`);
})


app.use(express.static('public'));


app.listen(5000,()=>{
    console.log('Servidor en port 5000');
});



