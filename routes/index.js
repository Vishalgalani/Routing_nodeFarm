var express = require('express');
var router = express.Router();
var fs = require('fs')

const jsonData = fs.readFileSync("./data.json","utf-8")
const data = JSON.parse(jsonData)
// console.log(data);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/farm', function(req, res, next) {
  res.render('farm', { allData : data});
});
router.get('/product', function(req, res, next) {
  console.log(req.query.no);
  let read = data[req.query.no]
  res.render('product' ,{ data : read});
});

module.exports = router;
