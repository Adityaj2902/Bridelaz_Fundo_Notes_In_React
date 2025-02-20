// import axios from "axios"


// const loginApiCall=(payload)=>{
// return axios.post('',payload)

// }


import axios from "axios";

const BASE_URL = "http://localhost:5500/api/v1/users"; // Replace with your actual API endpoint

export const loginApiCall = (payload) => {
  return axios.post(`${BASE_URL}/login`, payload)
    .then(response => {
      // Handle success
      console.log("Login successful:", response.data);
      return response.data;
    })
    .catch(error => {
      // Handle error
      console.error("Login error:", error);
      throw error;
    });
};

export const signupApiCall = (payload) => {
  return axios.post(`${BASE_URL}/register`, payload)
    .then(response => {
      // Handle success
      console.log("Signup successful:", response.data);
      return response.data;
    })
    .catch(error => {
      // Handle error
      console.error("Signup error:", error);
      throw error;
    });
};