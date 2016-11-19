// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express')        // call express
var app        = express()                 // define our app using express
var port = process.env.PORT || 3000        // set our port

//app.set('view engine', 'pug')
app.use(express.static(__dirname))
app.get('/', function(req, res){
	res.render('index')
})
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Portfolio running on port : ' + port)
