import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWUzNTgwMGU3MjM4ZGMzNTU1NDYyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODk4MDk5MCwiZXhwIjoxNjM5MjQwMTkwfQ.5ByF1XIljFGMSTR-Ee1Gq7MWdEcPaGrNsMGuVGoSUZ8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
