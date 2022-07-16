import { ApiCore } from "./utilities/core";
import axios from "axios";

const url = "board";
const boardApi = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  delete: true,
  url: url,
});

boardApi.getByUser = (userId) => {};

module.exports = boardApi;
