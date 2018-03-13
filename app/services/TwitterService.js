
import ApiService from "./ApiService.js";

const TwitterService = {

  get: () => {
    return ApiService.get({
      url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realdonaldtrump&count=2'
    });
  }
};

export default TwitterService;
