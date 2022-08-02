import Axios from "axios";

Axios.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.VUE_APP_STRAPI_BASE_URL

    const strapi_api_token = process.env.VUE_APP_STRAPI_API_TOKEN
    config.headers["Authorization"] = `Bearer ${strapi_api_token}`;
    config.headers["Content-Type"] = "application/json";

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
)

class BaseAPI {
  static get(url, config = {}) {
    return Axios.get(url, config);
  }
};

export class StrapiAPI extends BaseAPI {
  static getHomepageContent() {
    const url = `api/homepage`;
    return this.get(url);
  }
};