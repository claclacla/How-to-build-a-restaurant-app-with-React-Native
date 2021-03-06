const express = require('express');
const router = express.Router();

let restaurants = [
  {
    uid: "iIkwlg8c",
    name: "Magic Pizza",
    categories: [
      "Pizza"
    ],
    services: [
      "Delivery"
    ]
  },
  {
    uid: "3pQwDp0B",
    name: "Magic Pasta",
    categories: [
      "Pasta"
    ],
    services: [
      "Take away"
    ]
  },
  {
    uid: "035TfJp0",
    name: "Magic Fast Food",
    categories: [
      "Hamburger"
    ],
    services: [
      "Delivery",
      "Take away"
    ]
  }
]

router
  .get('/', function (req, res, next) {
    let query = req.query;

    let resRestaurants = restaurants;
    
    if(query.q) {      
      let q = JSON.parse(query.q);
      
      if(q.category) {
        resRestaurants = resRestaurants.filter(restaurant => 
          restaurant.categories.findIndex(category => category === q.category) >= 0
        )
      }
    }

    res.send({
      data: resRestaurants
    });
  });

module.exports = router;