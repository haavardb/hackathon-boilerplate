import React from 'react';
import moment from 'moment';

class ResultItem extends React.Component {

  render() {
    let tweet = this.props.tweet;
    let image = tweet.sentimentScore >= 0 ? <img src="images/trump-happy.jpg" alt="happy trump"/> : <img src="images/trump-angry.jpg" alt="angry trump"/>;

    let weatherEl = "";
    let weather = tweet.weather;
    if(weather) {

      let hour = moment(tweet.created_at).hour();
      let weatherData = weather.data[hour];

      let weatherImageSrc = "sun";
      if(weatherData.weather.code >= 804) {
        weatherImageSrc = "clouds"

      } else if(weatherData.weather.code > 800) {
        weatherImageSrc = "cloudy"
      }

      if(weatherData) {
          weatherEl = <div className="weather">
            <h3>Weather</h3>
            <img src={"images/" + weatherImageSrc + ".jpg"} alt="weather"/>
            <div>{weatherData.weather.description} ({weatherData.weather.code})</div>
          </div>
      }
    }
    // console.dir(weather);

    return (
      <div className="result-item">
        <p className="text">{this.props.tweet.text}</p>
        <div>
          <span className="date">{moment(this.props.tweet.created_at).format('DD.MM.YY HH:MM')}</span>
          <span className="location">from {this.props.tweet.user.location}</span>
        </div>
        <div className="comparison">
          <div className="mood">
            <h3>Mood</h3>
            {image}
            <div>{this.props.tweet.sentimentScore} / {this.props.tweet.sentimentMagnitude}</div>
          </div>
          {weatherEl}
        </div>
      </div>
    );
  }
};

export default ResultItem;
