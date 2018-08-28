const express = require('express');
const router = express.Router();

let restaurants = [
  {
    uid: "iIkwlg8c",
    name: "Magic Pizza",
    services: [
      "Delivery"
    ]
  },
  {
    uid: "3pQwDp0B",
    name: "Magic Pasta",
    services: [
      "Take away"
    ]
  },
  {
    uid: "035TfJp0",
    name: "Magic Wine",
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
      
      if(q.service) {
        resRestaurants = resRestaurants.filter(restaurant => 
          restaurant.services.findIndex(service => service === q.service) >= 0
        )
      }
    }

    res.send({
      data: resRestaurants
    });
  });

module.exports = router;