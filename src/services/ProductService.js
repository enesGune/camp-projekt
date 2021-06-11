import axios from "axios";

export default class ProductSevice {
  getProducts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
    // şuan apiye axios ile sorgu atıyoruz
  }
}
