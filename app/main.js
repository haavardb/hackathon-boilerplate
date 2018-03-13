import TwitterService from './services/TwitterService';
import TrumpService from './services/TrumpService';
import PxService from './services/500pxService';

// import $ from 'jquery'; // If you want to use jQuery

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


TwitterService.get("").then((data) => {
  console.log(data);
});

TrumpService.get("").then((data) => {
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


// $(document).ready(() => {
//   $('body').html('<p>jQuery aktivert</p>');
//   fetch('http://localhost:3000/api')
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       console.log(result);
//     });
// });
