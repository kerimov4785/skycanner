import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

async function getAllFlights() {
  try {
    const res = await axios.get(`${BASE_URL}/Allflights`);
    return res.data;
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function addUser(user) {
  try {
    const res = await axios.post(`${BASE_URL}/users`, user)
    return res.data
  }
  catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function checkUser(user) {
  try {
    const res = await axios.get(`${BASE_URL}/users?email=${user.email}`)
    console.log(res.data)
    return res.data
  }
  catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function signIn(user) {
  try {
    const res = await axios.get(`${BASE_URL}/users?email=${user.email}&password=${user.password}`)
    console.log(res.data)
    return res.data
  }
  catch (err) {
    console.error("Axios error:", err.message);
  }
}

export { getAllFlights, addUser, checkUser, signIn }