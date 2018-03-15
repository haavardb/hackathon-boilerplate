import React from 'react';
import ResultItem from './ResultItem.js';
import moment from 'moment';

class Result extends React.Component {

  render() {

    // let results = [
    //   {tweet: {date: "10.01.18 18:30", location: "Washington DC", text: "We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trud"}, mood: -0.6, weather: {text: "Thunderclouds", type: "sun"}},
    //   {tweet: {date: "10.01.18 18:30", location: "Washington DC", text: "We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trud"}, mood: -0.6, weather: {text: "Thunderclouds", type: "cloudy"}},
    //   {tweet: {date: "10.01.18 18:30", location: "Washington DC", text: "We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trud"}, mood: -0.6, weather: {text: "Thunderclouds", type: "rain"}},
    //   {tweet: {date: "10.01.18 18:30", location: "Washington DC", text: "We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trud"}, mood: -0.6, weather: {text: "Thunderclouds", type: "thunder"}}
    // ]

    let resultsArray = this.props.data.tweets.map((r,i) => {
      let date = moment(r.created_at);

      // console.log("weather " + this.props.data.weather.length);

      return <ResultItem key={i} tweet={r} weather={{text: "Thunderclouds", type: "sun"}} />
    });

    return (
      <div>
        <h2 id="heading">The crazy man keeps tweeting:</h2>
        <div className="results">
        {resultsArray}
        </div>

      </div>
    );
  }

};

export default Result;
