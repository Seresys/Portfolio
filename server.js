// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express')        // call express
var nodemailer = require('nodemailer');		 // call nodemailer
var bodyParser = require('body-parser');	 // parser for post requests
var app        = express()                 // define our app using express
var port = process.env.PORT || 3000        // set our port

// Body parser config
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Node mailer config
var user = process.env.USER;
var pass = process.env.PASSWORD;
var smtpTransport = nodemailer.createTransport('smtps://'+user+'%40gmail.com:'+pass+'@smtp.gmail.com');

//app.set('view engine', 'pug')
app.use(express.static(__dirname))
app.get('/', function(req, res){
	res.render('index')
})

app.post('/send',function(req,res){
	  var mailOptions={
	      to : PROCESS.env.USER+"@gmail.com",
	      subject : req.body.subject,
	      text : req.body.body
	  }
	  smtpTransport.sendMail(mailOptions, function(error, response){
	  if(error){
	    res.end("error");
	  }else{
	  	res.end("sent");
	  }
	});
});
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Portfolio running on port : ' + port);
