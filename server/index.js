const express = require('express'); 
const app = express();
const morgan = require('morgan');

const{Mongoose} =  require('./database');

//Settings
app.set('port',process.env.PORT || 3000)

//Meddlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/user',require('./routes/routes'));

//Starting server

app.listen(app.get('port'),()=>
{
console.log('server en puerto ',app.get('port'))
});