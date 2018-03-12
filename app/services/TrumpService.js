
class TrumpService {
  constructor() {
    console.log("hello twittah!");
  }

  get() {
    return fetch('https://api.tronalddump.io/random/quote', {
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      // credentials: 'include'
    })
    .catch(function(e) {
      console.log("OH BOY! YOU GOT SOME ERRORS, SON!");
      console.log(e);
    })
    .then(function(response) {
      return response.json();
    })
  }
};

export default TrumpService;
