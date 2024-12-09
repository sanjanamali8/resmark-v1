import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Backend URL
});

export const fetchData = () => API.get("/");