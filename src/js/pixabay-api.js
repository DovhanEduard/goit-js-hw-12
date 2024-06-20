import axios from 'axios';

export async function getImages(imgType, page, perPage) {
  const params = {
    key: '44440808-4b688fa5899148ccacb476dd1',
    q: imgType,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  };

  const res = await axios(`https://pixabay.com/api`, {params});

  return res.data;
}
