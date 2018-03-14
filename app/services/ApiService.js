
const ApiService = {

  get: (params) => {
    let esc = encodeURIComponent;
    let query = Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');

    return fetch('http://localhost:3000/api?' + query)
      .catch(function(e) {
        console.log("OH BOY! YOU GOT SOME ERRORS, SON!");
        console.log(e);
      })
      .then(function(response) {
        return response.json();
      })
  },

  post: (params, data) => {
    let esc = encodeURIComponent;
    let query = Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');

    return fetch('http://localhost:3000/api?' + query, {
      body: JSON.stringify(data),
      method: "POST"
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

export default ApiService;
