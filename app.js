//require section
const express = require('express');
const app = express();
const routes=require('./routes/index')
const bodyParser=require('body-parser');

//settings
app.set("port", process.env.PORT || 3000);
app.set('views', __dirname + "/views");
app.set('view engine','ejs')


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(routes);


//routes


//server
app.listen(app.get('port'),()=>console.log("server runing in port",app.get('port')));