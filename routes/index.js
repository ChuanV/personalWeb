var express = require("express")
var router = express.Router()

router.get('/',function(req, res, next){
    res.render("home.html")
})

router.get('/home',function(req, res, next){
    res.render("home.html")
})

router.get('/awards',function(req, res, next){
    res.render("awards.html")
})

router.get('/publications',function(req, res, next){
    res.render("publications.html")
})

router.get('/portfolio',function(req, res, next){
    res.render("portfolio.html")
})

router.get('/photograph',function(req, res, next){
    res.render("photograph.html")
})

router.get('/cv',function(req, res, next){
    res.render("cv.html")
})

router.get('/test',function(req, res, next){
    res.render("test.html")
})

module.exports = router