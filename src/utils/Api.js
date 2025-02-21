import axios from "axios";

const BASE_URL = "http://localhost:5500/api/v1/users"; // Replace with your actual API endpoint
const BASE_URL_NOTE = "http://localhost:5500/api/v1/notes"; // Replace with your actual API endpoint




export const loginApiCall = (payload) => {
  return axios.post(`${BASE_URL}/login`, payload)
    .then(response => {
      // Handle success
      console.log("Login successful:", response.data);
      localStorage.setItem('token', response.data.token.token);

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

export const storeNoteApiCall = (noteData) => {
  const token=localStorage.getItem('token');
  console.log(token);
  return axios.post(`${BASE_URL_NOTE}/`, noteData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      // Handle success
      console.log("Note stored successfully:", response.data);
      localStorage.setItem('note', JSON.stringify(response.data));
      return response.data;
    })
    .catch(error => {
      // Handle error
      console.error("Error storing note:", error);
      throw error;
    });
};