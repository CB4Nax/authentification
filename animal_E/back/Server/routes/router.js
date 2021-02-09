const routes = require("express").Router();
 

routes.get('/',function(req,res,next){
    res.json({test:'test'});
});


module.exports = routes;