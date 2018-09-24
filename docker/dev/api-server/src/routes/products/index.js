const express = require('express');
const router = express.Router();

let products = [
  {
    uid: "eRtfko4E",
    name: "Pizza margherita",
    restaurant: "Magic Pizza"
  },
  {
    uid: "ptLkofmm4",
    name: "Pizza marinara",
    restaurant: "Magic Pizza"
  },
  {
    uid: "rThgty01",
    name: "Spaghetti and Meatballs",
    restaurant: "Magic Pasta"
  },
  {
    uid: "iOfjtLp4",
    name: "Carbonara",
    restaurant: "Magic Pasta"
  },
  {
    uid: "3eoP046g",
    name: "Mozzarella sticks",
    restaurant: "Magic Fast Food"
  },
  {
    uid: "qkodFju2",
    name: "Chicken nuggets",
    restaurant: "Magic Fast Food"
  },
]

router
  .get('/', function (req, res, next) {
    let query = req.query;

    let resProducts = products;

    if (query.q) {
      let q = JSON.parse(query.q);

      if (q.restaurant) {
        resProducts = resProducts.filter(product =>
          product.restaurant === q.restaurant
        )
      }
    }

    res.send({
      data: resProducts
    });
  });

module.exports = router;