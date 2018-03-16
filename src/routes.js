// Routes

module.exports = app => {

  app.get('/test', function(req, res){
    res.render('index', {
      'textStuff': 'Tennessee Land For Sale at TN Land'
    })
  });
}