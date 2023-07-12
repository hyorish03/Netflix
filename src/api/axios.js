import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a3c719678876c28f05a3ec5c5206a35a",
    language: "ko-KR",
  },
});

export default instance;
