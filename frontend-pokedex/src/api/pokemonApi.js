import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9090/api/pokemon",
});

export const fetchRandomCards = () =>
  API.get("/random");

export const fetchPokemonDetails = (name) =>
  API.get(`/details/${name}`);
