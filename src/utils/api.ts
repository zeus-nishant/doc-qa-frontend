import axios from "axios";

const api = axios.create({
  baseURL: "http://13.60.210.227:8080/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;