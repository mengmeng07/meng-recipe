import axios, { Axios } from "axios";

export class BaseClient {
  protected axios: Axios;

  constructor() {
    this.axios = axios.create({ baseURL: 'http://localhost:5000/api' });
  }
}
