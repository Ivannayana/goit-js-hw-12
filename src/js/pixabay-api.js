const key = '43312090-89e3d2b4f295c74d82d728d94';

export function fetchRequest(request) {
  const searchParams = new URLSearchParams({
    key: key,
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 99,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
