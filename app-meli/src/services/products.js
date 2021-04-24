import axios from "axios";

const baseUrl = "https://api.mercadolibre.com";

const getLimitedProducts = (query, limit) => {
  const request = axios.get(`${baseUrl}/sites/MLA/search?q=${query}`);
  return request.then(response => response.data.results.slice(0, limit));
  /* return request.then(response => response.data.results.filter(result => 
    result.title.toLowerCase().includes(query.toLowerCase())).slice(0, limit)); */
};

const getCategories = (query) => {
  const request = axios.get(`${baseUrl}/sites/MLA/search?q=${query}`);
  return request.then(response => {
    let categories = [];
    if (response.data.filters.length === 0) return [];
    else {
      categories = response.data.filters[0].values[0].path_from_root;
    }
    return categories;
  });
}

const getProduct = (id) => {
  const request = axios.get(`${baseUrl}/items/${id}`);
  return request.then(response => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {getLimitedProducts, getCategories, getProduct};
