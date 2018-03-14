const request = require('request');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  let url = `${req.query.url}?`;

  if (url.indexOf('twitter') > -1) {
    req.headers.Authorization = 'Bearer AAAAAAAAAAAAAAAAAAAAAE6o4wAAAAAAzJnqNSWEPTmAlSm1zVq5%2BjfQFBY%3D4b2iipUm42TKIoqSUnV0bDBA96ZcDOVZu7IVUSJbXb1TWSbBgc';
  }

  // Map other queryparameters to final request
  Object.keys(req.query).forEach((key) => {
    if (key !== 'url') {
      const val = req.query[key];
      url = `${url}${key}=${val}&`;
    }
  });

  req.pipe(request(url)).pipe(res);
});


module.exports = router;
