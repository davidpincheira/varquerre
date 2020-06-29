const User = require('../models').User;
//const User = require('../models/user');

module.exports = {
    //en este caso new desplega el formulario de authenticacion
    new: function(req, res){
        res.render('sessions/new')
    },
    //recibe los datos del formulario para crear la sesion y completar el proceso de autenticacion
    create: function(req, res){
        User.login(req.body.personnelNumber, req.body.password)
            .then(user => {
                if(user){
                    req.session.userId = user.id
                }
                res.json(user)
            })
            .catch(err=>{
                console.log(err);
                res.json(err)
            })
    },
    destroy: function(req, res){
        //ejecuto el metodo destroy() sobre el objeto session
        req.session.destroy(function(){
            res.redirect('/sessions')
        });
    }
}