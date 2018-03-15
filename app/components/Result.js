import React from 'react';
import ResultItem from './ResultItem.js';

class Result extends React.Component {

  render() {

    let results = [
      {tweet: {date: "10.01.18 18:30", location: "Washington DC", text: "We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trud"}, mood: -0.6, weather: {text: "Thunderclouds", type: "sun"}},
      {tweet: {date: "10.01.18 18:30", location: "Washington DC", text: "We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trud"}, mood: -0.6, weather: {text: "Thunderclouds", type: "cloudy"}},
      {tweet: {date: "10.01.18 18:30", location: "Washington DC", text: "We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trud"}, mood: -0.6, weather: {text: "Thunderclouds", type: "rain"}},
      {tweet: {date: "10.01.18 18:30", location: "Washington DC", text: "We do have a Trade Deficit with Canada, as we do with almost all countries (some of them massive). P.M. Justin Trud"}, mood: -0.6, weather: {text: "Thunderclouds", type: "thunder"}}
    ]

    let resultsArray = results.map((r,i) => {
      return <ResultItem key={i} tweet={r.tweet} mood={r.mood} weather={r.weather} />
    });

    return (
      <div>
        <h2 id="heading">This is the result yall</h2>
        {resultsArray}
      </div>
    );
  }

};

export default Result;
