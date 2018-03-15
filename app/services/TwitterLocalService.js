import ApiService from './ApiService';

const TwitterLocalService = {

  // API DOCS
  // https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline

  readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
  }

  readTextFile("/Users/Documents/thomashegge/Sites/the-plate/app/components/TwitterTimeLine.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    return data;
  });

  getTimeLine: (usr) => {
    // return ApiService.get({
    //   url: '../components/TwitterTimeLine.json'
    // });
  },
};

export default TwitterLocalService;
