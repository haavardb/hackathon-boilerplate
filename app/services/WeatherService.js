import ApiService from './ApiService';

const WeatherService = {

  // API DOCS
  // https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline

  getHistoricalWeatherAt: (startdate, enddate, city, country) => {
    return ApiService.get({
      url: 'https://api.weatherbit.io/v2.0/history/hourly',
      start_date: startdate,
      end_date: enddate,
      city: city + (country && country.length > 0 ? (",," + country) : "")
    });
  },
};

export default WeatherService;
