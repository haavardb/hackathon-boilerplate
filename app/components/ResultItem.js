import React from 'react';

class ResultItem extends React.Component {

  render() {

    let image = this.props.tweet.sentimentScore > 0 ? <img src="images/trump-happy.jpg" alt="happy trump"/> : <img src="images/trump-angry.jpg" alt="angry trump"/>;

    return (
      <div className="result-item">
        <p className="text">{this.props.tweet.text}</p>
        <div className="date">{this.props.tweet.date}</div>
        <div className="location">{this.props.tweet.location}</div>
        <div className="comparison">
          <div className="mood">
            <h3>Mood</h3>
            <div>{this.props.tweet.sentimentScore}</div>
            {image}
          </div>
          <div className="weather">
            <h3>Weather</h3>
            <div>{this.props.weather.text}</div>
            <img src={"images/" + this.props.weather.type + ".jpg"} alt={this.props.weather.type}/>
          </div>
        </div>
      </div>
    );
  }
};

export default ResultItem;
