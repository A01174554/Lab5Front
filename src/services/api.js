import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getCountries = () => API.get("/countries");

export const createCountry = (country) => API.post("/countries", country);

export const deleteCountry = (id) => API.delete(`/countries/${id}`);

export const updateCountry = (id, country) =>
  API.put(`/countries/${id}`, country);