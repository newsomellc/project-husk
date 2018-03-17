// Routes

module.exports = app => {

  app.get('/', function(req, res){
    res.render('index', {
      'textStuff': 'Tennessee Land For Sale at TN Land'
    })
  });
}