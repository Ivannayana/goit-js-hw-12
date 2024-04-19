import axios from 'axios';

export async function fetchImages(searchWord, currPage) {
  const KEY = '43312090-89e3d2b4f295c74d82d728d94';
  const URL = 'https://pixabay.com/api/';
  const resp = await axios.get(URL, {
    params: {
      key: KEY,
      q: searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currPage,
      per_page: 15,
    },
  });
  return resp.data;
}
