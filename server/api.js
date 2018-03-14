const request = require('request');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  let url = `${req.query.url}?`;

  if (url.indexOf('twitter') > -1) {
    req.headers.Authorization = 'UPON REQUEST';
  }

  if (url.indexOf('weatherbit') > -1) {
    req.query.key = 'c1035535f2744229bd79040897c131c3';
  }

  if (url.indexOf('googleapis') > -1) {
    req.query.key = 'UPON REQUEST';
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

router.post('/', (req, res) => {
  let url = `${req.query.url}?`;

  if (url.indexOf('googleapis') > -1) {
    req.query.key = 'AIzaSyA1XFYR0SNu3PtaejbnObJ7RYJxL1KKjUg';
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
