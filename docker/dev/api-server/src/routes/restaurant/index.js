const express = require('express');
const router = express.Router();

let restaurant = [
  {
    uid: "iIkwlg8c",
    name: "Magic Pizza"
  },
  {
    uid: "3pQwDp0B",
    name: "Magic Pasta"
  },
  {
    uid: "035TfJp0",
    name: "Magic Wine"
  }
]

router
  .get('/', function (req, res, next) {
      res.send({
        data: restaurant
      });
    });

module.exports = router;