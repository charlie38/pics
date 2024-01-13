import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID M4QJStmJaZrCssgbjPzgclkD3Co5v09oi7qiZEC6EkY'
  }
});
