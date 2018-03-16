import React from 'react';
import Result from './Result.js';

import TwitterService from '../services/TwitterService';
import GoogleCloudService from '../services/GoogleCloudService';
import WeatherService from '../services/WeatherService';

import moment from 'moment';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      weather: [],
      tweets: []
    }
  }

  componentDidMount() {

    let tweets = [];
    let weathers = [];

    // let arr = TwitterLocalService.readTextFile();

    TwitterService.getTimeLine("realdonaldtrump").then((data) => {
      console.log(data);

      let loc = "", cloc = "", date = "", cdate = "";
      let fdate = "", ldate = "";
      let locations = [];

      for (var i = 0; i < data.length; i++) {

        let tweet = data[i];
        cloc = data[i].user.location;
        cdate = moment(data[i].created_at).format("YYYY-MM-DD");
        let text = data[i].text;

        if(i === 0) {
          ldate = cdate;
        }

        if(i === data.length-1) {
          fdate = cdate;
        }

        GoogleCloudService.getSentiment(text).then((gdata) => {
          tweet.sentimentScore = gdata.documentSentiment.score;
          tweet.sentimentMagnitude = gdata.documentSentiment.magnitude;

          let tweets = this.state.tweets;
          for (var i = 0; i < tweets.length; i++) {
            if(tweets[i].created_at === tweet.created_at) {
              tweets[i] = tweet;
            }
          }

          this.setState({tweets: tweets});
        });

        if(cloc !== loc || date !== cdate) {

          if(cloc !== loc) {
            locations.push(cloc);
            loc = cloc;
          }

          if(date !== cdate) {
            let mydate = cdate
            WeatherService.getHistoricalWeatherAt(cdate, moment(cdate).add("days",1).format("YYYY-MM-DD"), loc).then((data) => {

              weathers.push(data);

              let tweets = this.state.tweets;
              for (var i = 0; i < tweets.length; i++) {
                if(moment(tweets[i].created_at).format("YYYY-MM-DD") == mydate){
                  tweets[i].weather = data;
                }
              }

              this.setState({weather: weathers, tweets: tweets});
            });

            date = cdate;
          }
        }
      }

      this.setState({tweets: data});

      console.log("tweets from " + fdate + " to " + ldate + " from " + locations.length + " locations");

      //SUBSTRACT DATES AND GET DURATION
      // let duration = moment.duration(moment(ldate).diff(moment(fdate)));
      // let days = duration.asDays();
      //
      // console.log("days: " + days);

      // WeatherService.getHistoricalWeatherAt(fdate, ldate, loc).then((data) => { //moment(date).add("days",1).format("YYYY-MM-DD")
      //   console.log("weather");
      //   console.log(data);
      //
      // });

    });

  }

  render() {
    return (
      <div>
        <h1 id="heading">Does Donald Trumpolini rule the weather?</h1>
        <Result data={this.state}/>
      </div>
    );
  }

}

export default App;
