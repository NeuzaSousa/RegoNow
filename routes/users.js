var express = require('express');
var router = express.Router();
const db = require("../model/helper");

function getUsers(req, res) {
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

// Routes 

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/users', getUsers);

module.exports = router;
