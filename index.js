var express = require('express'),
app = express();
process.env.PORT = 8001;
bodyParser = require('body-parser');

var infoRoutes = require('./routes/information');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res) {
	res.send("hello from root route");
});

app.use('/api/todos', infoRoutes)

app.listen(process.env.PORT, function() {
	console.log('APP is running on port' + process.env.PORT)
})