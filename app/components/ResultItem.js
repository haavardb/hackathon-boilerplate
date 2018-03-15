import React from 'react';

class ResultItem extends React.Component {

  render() {

    let image = this.props.mood > 0 ? <img src="images/trump-happy.jpg" alt="happy trump"/> : <img src="images/trump-angry.jpg" alt="angry trump"/>;
    
    return (
      <div>
        <p>{this.props.tweet.text}</p>
        <div className="date">{this.props.tweet.date}</div>
        <div className="location">{this.props.tweet.location}</div>
        <div>
          <h3>Mood</h3>
          {this.props.mood}
          {image}
        </div>
        <div>
          <h3>Weather</h3>
          {this.props.weather.text}
          <img src={"images/" + this.props.weather.type + ".jpg"} alt={this.props.weather.type}/>
        </div>
      </div>
    );
  }
};

export default ResultItem;
