import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID tCo20q-iQtI8Tf2aU0Vp07aI1K7Sy6yYraTKcDCY-cI'
  }
});
