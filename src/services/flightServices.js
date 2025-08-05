import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

async function getAllFlights() {
  try {
    const res = await axios.get(`${BASE_URL}/flights`);
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
    return res.data
  }
  catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function addLiked(userID, arr) {
  try {
    const userRes = await axios.get(`${BASE_URL}/users/${userID}`);
    const user = userRes.data;

    const updatedUser = {
      ...user,
      saved: arr
    };
    const res = await axios.put(`${BASE_URL}/users/${userID}`, updatedUser)
  }
  catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function getLiked(userID) {
  try {
    const res = await axios.get(`${BASE_URL}/users/${userID}`)
    return res.data
  }
  catch (error) {
    console.error("Axios error:", err.message);
  }
}
export { getAllFlights, addUser, checkUser, signIn, addLiked, getLiked }