import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_MARVEL_API_URL}`,
});

export { api };
