import { getPictures } from './js/pixabay-api.js';
import { picturesTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.input'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-wrap'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  showLoader();
  const userInput = e.target.elements.query.value.trim();

  if (userInput === '') {
    return iziToast.warning({
      title: 'Warning',
      message: 'Please, enter the query',
      layout: 2,
      displayMode: 'once',
      backgroundColor: '#ef4040',
      messageColor: '#ffffff',
      position: 'topRight',
    });
  }

  getPictures(userInput)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          layout: 2,
          displayMode: 'once',
          backgroundColor: '#ef4040',
          messageColor: '#ffffff',
          position: 'topRight',
        });
      }
      const markup = picturesTemplate(data.hits);
      console.log(markup);
      refs.gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
    })

    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      refs.searchForm.reset();
      hideLoader();
    });
});

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
