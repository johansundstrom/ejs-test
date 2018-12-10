const bodyParser = require('body-parser');
let express = require('express')
let app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    //res.send('hej')
    res.render('index')
})

app.post('/', function(req, res){
    res.render('index')
    console.log(req.body.city);
})

app.listen(3000, function(){
    console.log('up and running on 3000')
})