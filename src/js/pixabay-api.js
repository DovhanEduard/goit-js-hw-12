export function getImages(imgType) {
  const parameters = new URLSearchParams({
    key: '44440808-4b688fa5899148ccacb476dd1',
    q: imgType,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
    
  return fetch(`https://pixabay.com/api/?${parameters}`).then(res => res.json());
}


