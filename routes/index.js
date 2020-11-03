var express = require('express');
var router = express.Router();
const db = require("../model/helper");

function getUsers(req,res) {
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
router.get('/users', (req, res) => {
  db(`SELECT users.last_name, users.first_name, users.NIN,
  users.email, users.phone_number, loans.loans, savings,savings
  FROM ((users
    LEFT JOIN loans ON users.id = loans.usersId)
    LEFT JOIN savings ON users.id = savings.usersId);`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/users", (req, res) => {

  // The request's body is available in req.body
  let { last_name, first_name, NIN, email, phone_number, password } = req.body;
  db(`INSERT INTO users (last_name, first_name, NIN, email, phone_number, password) VALUES ("${last_name}", "${first_name}", ${NIN}, "${email}", ${phone_number}, "${password}");`)
  .then(() => {
    getUsers(req, res);
  })  
  .catch(err => res.status(500).send(err));
});


module.exports = router;
