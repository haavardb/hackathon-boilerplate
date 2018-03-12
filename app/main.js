import TwitterService from './services/TwitterService.js';
import TrumpService from './services/TrumpService.js';

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

// const ts = new TwitterService();
// ts.get("").then((data) => {
//   console.log(data);
// });

const t2 = new TrumpService();
t2.get("").then((data) => {
  console.log(data);
});


/*
  If you want to use Jquery
*/
import $ from 'jquery';
$(document).ready(() => {
  fetch('http://localhost:3000/api')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
});
