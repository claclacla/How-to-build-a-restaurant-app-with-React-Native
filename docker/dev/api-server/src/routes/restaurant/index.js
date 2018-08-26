const express = require('express');
const router = express.Router();

let restaurant = [
  {
    uid: "iIkwlg8c",
    name: "Magic Pizza"
  }
]

router
  .get('/', function (req, res, next) {
      res.send({
        data: restaurant
      });
    });

module.exports = router;