import Axios from "axios";

class BaseAPI {
  static get(url, config = {}) {
    return Axios.get(url, config);
  }
};

export class API extends BaseAPI {
  static formDynamicOptions(apiUrl) {
    let url =  `https://dev-api.ouchfree.co/${apiUrl}`;
    return this.get(url);
  }
};