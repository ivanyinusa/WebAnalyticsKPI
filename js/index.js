var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Web Analystics KPI' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('index', { title: 'Spark Real time Dashboard 1.01' });
});

router.get('/debug', function(req, res, next) {

    res.render('debug', { title: 'Web Analystics KPI | debug' });
    //res.redirect('http://192.168.1.100:28778');
    //res.redirect('http://192.168.1.100:50501');

});

router.get('/test', function(req, res, next) {

    res.render('test', { title: 'Web Analystics KPI | test' });
});

router.get('/google', function(req, res, next) {

    res.redirect('https://www.google.com');
});


module.exports = router;
