import ApiService from './ApiService';

const WeatherService = {

  // API DOCS
  // https://www.weatherbit.io/api/weather-history-hourly

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
