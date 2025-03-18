import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;