import ApiService from "./ApiService.js";

const TrumpService = {

  // API DOCS
  // https://docs.tronalddump.io/#introduction

  getRandomQuote: () => {
    return ApiService.get({
      url: 'https://api.tronalddump.io/random/quote'
    });
  }
};

export default TrumpService;
