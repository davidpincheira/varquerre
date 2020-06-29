const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override')
const session = require('express-session')

const app = express();

//defino rutas
const combosRoutes = require('./routes/combos_routes');
const ordersRoutes = require('./routes/orders_routes')
const registrationRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');

//middlewares
const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user')

app.use( bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set('view engine', 'pug')

//firma de llaves para sesiones
const cookie_secret = ['ñsdf2kr43a34j55s3dnkjd', 'lksdjflk4n3kjnlkdfng2j4m'];
app.use(session({
    secret: cookie_secret,
    resave: true,
    saveUninitialized: true
}))
/*  secret:['ñsdf2kr43a34j55s3dnkjd', 'lksdjflk4n3kjnlkdfng2j4m'],
    saveUnitialized: false,
    resave: false */

//uso middleware
app.use(findUserMiddleware)
app.use(authUser)
//uso rutas
app.use(combosRoutes)
app.use(ordersRoutes)
app.use(registrationRoutes)
app.use(sessionsRoutes)

app.get('/', function(req, res){
    res.render('home', {user: req.user})
})

app.listen(3000);