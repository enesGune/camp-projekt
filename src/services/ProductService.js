import axios from "axios";

export default class ProductSevice {
  getProducts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
    // şuan apiye axios ile sorgu atıyoruz 2:37
  }

  getPosId(id) {
    return axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }
}
