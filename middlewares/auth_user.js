//este middleware cumple la funcion de redireccionar vistas al login
module.exports = function(req, res, next){
//    if(!req.originalUrl.includes()) return next();
if(!req.originalUrl.includes("combos", "orders")) return next();

    if(req.session.userId) return next();

    res.redirect('/sessions');
}