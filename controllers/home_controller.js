module.exports.home = function(req, res){
    res.render('home', {
        title: 'To Do List'
    });
}