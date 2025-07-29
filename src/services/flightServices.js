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

export default getAllFlights 