export function getPictures(userInput) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '44667658-9ba2d67695abf8a1c08d7f54b',
    q: userInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(result => {
    if (!result.ok) {
      throw new Error(result.status);
    }
    return result.json();
  });
}
