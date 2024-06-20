import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { createImagesMarkup } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElem = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loadeMoreBtn = document.querySelector('.js-button');

let page = 1;
let perPage = 15;
let searchValue;
let prevSearchValue = '';
let isGalleryContainsItems = false;

form.addEventListener('submit', onSearchImg);
loadeMoreBtn.addEventListener('click', onClick);

async function onSearchImg(event) {
  event.preventDefault();

  galleryElem.innerHTML = '';

  loadeMoreBtn.classList.add('btn-hidden');

  searchValue = event.target.elements.imgType.value.trim();

  if (searchValue !== prevSearchValue) {
    prevSearchValue = searchValue;
    page = 1;
  }

  showLoader();

  try {
    const data = await getImages(searchValue, page, perPage);

    if (data.hits.length === 0 || searchValue === '') {
      throw new Error();
    }

    let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    const markup = data.hits.map(createImagesMarkup).join('');

    galleryElem.innerHTML = markup;

    page++;

    gallery.refresh();
  } catch (error) {
    iziToast.show({
      title: error,
      color: 'red',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }

  isGalleryContainsItems = galleryElem.hasChildNodes();

  if (isGalleryContainsItems) {
    loadeMoreBtn.classList.remove('btn-hidden');
  }

  hideLoader();
}

async function onClick(event) {
  try {
    const data = await getImages(searchValue, page, perPage);
    const markup = data.hits.map(createImagesMarkup).join('');

    let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    galleryElem.insertAdjacentHTML('beforeend', markup);
    gallery.refresh();

    const galleryItem = document.querySelector('.gallery-item');
    const scrollDistance = galleryItem.getBoundingClientRect().height * 2;

    window.scrollBy({
      top: scrollDistance,
      left: 0,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / perPage);

    if (page === totalPages) {
      loadeMoreBtn.classList.add('btn-hidden');
      return iziToast.error({
        color: 'white',
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    page++;
  } catch (error) {
    iziToast.show({
      title: error,
      color: 'red',
      message: `${error}`,
    });
  }
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
