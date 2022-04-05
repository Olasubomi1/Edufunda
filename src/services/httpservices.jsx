import axios from "axios";

const apiEndpoint = ``;
export function registerUser(
  firstname,
  lastname,
  country,
  number,
  email,
  password
) {
  return axios.post(apiEndpoint, {
    firstname,
    lastname,
    country,
    number,
    email,
    password,
  });
}
