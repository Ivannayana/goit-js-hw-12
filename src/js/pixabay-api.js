import axios from 'axios';

export async function fetchRequest(request, page) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '43312090-89e3d2b4f295c74d82d728d94';

  const response = await axios.get(`${BASE_URL}${END_POINT}`, {
    params: {
      key: API_KEY,
      q: request,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return response.data;
}
