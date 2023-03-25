import axios from "axios";

// Get the fragment from the URL
const fragment = window.location.hash.substring(1);

// Parse the fragment into an object containing the access token
const params = {};
fragment.split('&').forEach((pair) => {
  const [key, value] = pair.split('=');
  params[key] = value;
});
const accessToken = params.access_token;



let api = axios.create({
    headers:{
      'Client-ID': 'x1zbg9zvt5rtpde23f8yv0l0hw14qz',
      'Authorization': `Bearer ${accessToken}`
    }
})

export default api;