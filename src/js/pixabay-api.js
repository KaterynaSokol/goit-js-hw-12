import axios from "axios";

export async function getPictures(userInput, page) {
  const BASE_URL = 'https://pixabay.com/api/';

  

  return await axios.get(`${BASE_URL}`, {
    params: {
      key: '44667658-9ba2d67695abf8a1c08d7f54b',
      q: userInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
}
