import axios from "axios";

const baseUrl = "https://api.mercadolibre.com";

const getLimitedProducts = (query, limit) => {
  const request = axios.get(`${baseUrl}/sites/MLA/search?q=${query}`);
  return request.then(response => response.data.results.slice(0, limit));
  /* return request.then(response => response.data.results.filter(result => 
    result.title.toLowerCase().includes(query.toLowerCase())).slice(0, limit)); */
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {getLimitedProducts};
