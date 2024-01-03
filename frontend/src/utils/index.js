import axios from "axios";

// const BASE_URL = "http://localhost:5500";
let BASE_URL;

if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://proshop-fics.onrender.com";
} else {
  BASE_URL = "http://localhost:5500";
}

export const Axios = axios.create({
  baseURL: `${BASE_URL}`,
});
