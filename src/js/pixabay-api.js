import axios from 'axios';

const key = '43312090-89e3d2b4f295c74d82d728d94';

export async function fetchRequest(request) {
  const searchParams = new URLSearchParams({
    key: key,
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 99,
  });
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка отримання даних:', error);
    throw error;
  }
}
