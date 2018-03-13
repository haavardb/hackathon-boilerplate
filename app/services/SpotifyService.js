import ApiService from "./ApiService.js";

const SpotifyService = {

  // API DOCS
  // https://

  get: () => {
    return ApiService.get({
      url: ''
    });
  }
};

export default SpotifyService;
