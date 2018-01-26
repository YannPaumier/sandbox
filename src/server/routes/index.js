var express = require('express');
var router = express.Router();

/* API PART */
router.post('/test', function(req, res) {
  console.log('BLABLA');
  console.log(req.body.id);
});

/* GET home page. */
router.get('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname+'../../../..' });
});

module.exports = router;
