var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Torrent App'
  });
});

router.get('/search', function (req, res) {
  res.send('Searching Database');
});

module.exports = router;