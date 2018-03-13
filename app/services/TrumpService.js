import ApiService from "./ApiService.js";

const TrumpService = {

  get: () => {
    return ApiService.get({
      url: 'https://api.tronalddump.io/random/quote'
    });
  }
};

export default TrumpService;
