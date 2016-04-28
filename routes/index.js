var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Analystics KPI' });
});

router.get('/dashboard_linux', function(req, res, next) {
  res.render('dashboard', { title: 'Spark Real time Dashboard 1.01' });
});

router.get('/debug', function(req, res, next) {

    res.render('debug', { title: 'Web Analystics KPI | debug' });
    //res.redirect('http://192.168.1.100:28778');
    //res.redirect('http://192.168.1.100:50501');

});

router.get('/test', function(req, res, next) {

    res.render('realtime_bi', { title: 'Web Analystics KPI | test' });
    //res.redirect('http://192.168.1.100:28778');
    //res.redirect('http://192.168.1.100:50501');

});

module.exports = router;
