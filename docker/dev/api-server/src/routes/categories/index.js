const express = require('express');
const router = express.Router();

let categories = [
  "Pizza",
  "Pasta",
  "Hamburger"
]

router
  .get('/', function (req, res, next) {
    res.send({
      data: categories
    });
  });

module.exports = router;