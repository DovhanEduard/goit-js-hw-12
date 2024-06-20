// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { createImagesMarkup } from './js/render-functions';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElem = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  galleryElem.innerHTML = '';

  const searchValue = event.target.elements.imgType.value.trim();

  showLoader();
  getImages(searchValue)
    .then(data => {
      if (data.hits.length === 0 || searchValue === '') {
        throw new Error();
      }

      let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      const markup = data.hits.map(createImagesMarkup).join('');
      galleryElem.innerHTML = markup;

      gallery.refresh();
    })
    .catch(() => {
      iziToast.show({
        title: 'Error',
        color: 'red',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      hideLoader();
    });
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
