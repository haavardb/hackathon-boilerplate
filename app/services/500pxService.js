import ApiService from "./ApiService.js";

const pxService = {

  search: (str, offset) => {
    const limit = 50;
    const page = (offset > 0) ? (offset / limit) + 1 : 1;

    return ApiService.get({
      url: 'https://api.500px.com/v1/photos/search',
      consumer_key: 'Z2a6nyRjDzrMHs7QvWq0pimix4w4ce7xZvwBb6K0', // Ask me (Håvard) for it
      term: str,
      image_size: '20,1600',
      rpp: limit,
      page,
    });
  },

  findbylatlong: (lat, long, radius, offset) => {
    const limit = 50;
    const page = (offset > 0) ? (offset / limit) + 1 : 1;

    return ApiService.get({
      url: 'https://api.500px.com/v1/photos/search',
      consumer_key: 'Z2a6nyRjDzrMHs7QvWq0pimix4w4ce7xZvwBb6K0', // Ask me (Håvard) for it
      image_size: '20,1600',
      geo: `${lat},${long},${radius}`,
      rpp: limit,
      page,
    });
  },

  findPopular: (offset) => {
    const limit = 50;
    const page = (offset > 0) ? (offset / limit) + 1 : 1;

    return ApiService.get({
      url: 'https://api.500px.com/v1/photos',
      consumer_key: 'Z2a6nyRjDzrMHs7QvWq0pimix4w4ce7xZvwBb6K0', // Ask me (Håvard) for it
      image_size: '20,1600',
      feature: 'popular',
      rpp: limit,
      page,
    });
  },
};

export default pxService;
