var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('category/menu');
});

router.get('/edit', function(req, res, next) {
  res.render('category/searchMenu');
});

router.get('/add', (req, res, next) => {
  res.render('category/add');
});
 

module.exports = router;