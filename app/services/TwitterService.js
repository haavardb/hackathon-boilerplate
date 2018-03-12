


class TwitterService {
  constructor() {
    console.log("hello twittah!");
  }

  get() {
    return fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
    .catch(function(e) {
      console.log("OH BOY! YOU GOT SOME ERRORS, SON!");
      console.log(e);
    })
    .then(function(response) {
      return response.json();
    })
    // .then(function(myJson) {
    //   console.log(myJson);
    // });
    // fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realdonaldtrump&count=2', {
    //   headers: {
    //     Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAE6o4wAAAAAAzJnqNSWEPTmAlSm1zVq5%2BjfQFBY%3D4b2iipUm42TKIoqSUnV0bDBA96ZcDOVZu7IVUSJbXb1TWSbBgc"
    //   },
    //   mode: "cors",
    //   credentials: 'include',
    //   method: "GET"
    // })
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   console.log(myJson);
    // });
  }
};

export default TwitterService;
