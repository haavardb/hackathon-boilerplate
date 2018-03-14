import TwitterService from './services/TwitterService';
import TrumpService from './services/TrumpService';
import PxService from './services/500pxService';
import WeatherService from './services/WeatherService';
import GoogleCloudService from './services/GoogleCloudService';

TwitterService.getTimeLine("realdonaldtrump").then((data) => {
  console.log(data);
});

/*
  If you want to use React
*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
//
// import Root from './config/Root';
//
// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root'),
//   );
// };
//
// render(Root);
//
// if (module.hot) {
//   module.hot.accept('./config/Root', () => {
//     const newApp = require('./config/Root').default;
//     render(newApp);
//   });
// }

GoogleCloudService.getSentiment("All across this nation, we pray for our country and we THANK GOD for our United States Marines! Thank you. God Bless You. And God Bless America!").then((data) => {
  console.log(data);
});

WeatherService.getHistoricalWeatherAt("2018-03-10", "2018-03-11", "Oslo").then((data) => {
  console.log(data);
});

PxService.search("developer").then((data) => {
  console.log(data);
});

// lat, long, radius. This finds images within 20 km of the Deloitte building
PxService.findbylatlong(59.907049, 10.760147, 20).then((data) => {
  console.log(data);
});

PxService.findPopular().then((data) => {
  console.log(data);
});


import $ from 'jquery'; // If you want to use jQuery
$(document).ready(() => {
  $('body').append('<p>jQuery aktivert</p>');
  TrumpService.getRandomQuote().then((data) => {
    console.log(data);
  });
});
