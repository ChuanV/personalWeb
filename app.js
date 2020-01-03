var express = require('express')
var app = express()
var router = require("./routes/index")
var path = require('path')

app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/static/',express.static(path.join(__dirname,'./static/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))

app.use(router)
app.use(function (req, res) {
	res.render('404.html')
})
app.use(function (err, req, res, next) {
	res.render('500.html',{message: err.message})
})
var server = app.listen(80,function(){
    console.log("App runnig at 80...")
})