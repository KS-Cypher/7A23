/*GET homepage*/
module.exports.about= function(req,res){
    res.render('generic-text',{title:'About'});
};
module.exports.signin= function(req,res){
    res.render('signin');
};
module.exports.register=function(req,res){
    res.render('register');
}