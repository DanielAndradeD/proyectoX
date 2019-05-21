var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hola', function(req, res, next) {
	//solucitud a una ruta de api rest
  res.render('saludo', { otraCosa: 'cosa' });
});

module.exports = router;
