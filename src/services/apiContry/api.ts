import axios from "axios";
const baseUrl = "https://amazon-api.sellead.com/";

export const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});
