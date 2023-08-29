import { get } from 'axios';

async function fetchPost() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  try {
    const response = await get(apiUrl);
    console.log('Resposta:', response.data);
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
  }
}

fetchPost();