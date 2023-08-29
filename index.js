const axios = require('axios');

async function fetchPost() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  try {
    const response = await axios.get(apiUrl);
    console.log('Resposta:', response.data);
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
  }
}

fetchPost();