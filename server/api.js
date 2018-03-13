const request = require('request');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  var url = req.query.url;
  // console.log(req.query);

  if(url.indexOf('twitter') > -1) {
    req.headers['Authorization'] = "Bearer AAAAAAAAAAAAAAAAAAAAAE6o4wAAAAAAzJnqNSWEPTmAlSm1zVq5%2BjfQFBY%3D4b2iipUm42TKIoqSUnV0bDBA96ZcDOVZu7IVUSJbXb1TWSbBgc";
  }


  req.pipe(request(url)).pipe(res);
});




module.exports = router;
