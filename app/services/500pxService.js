import ApiService from "./ApiService.js";

const pxService = {

  // API DOCS
  // https://

  get: () => {
    return ApiService.get({
      url: ''
    });
  }
};

export default pxService;
