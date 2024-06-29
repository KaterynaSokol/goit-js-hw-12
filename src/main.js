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
  loadmore: document.querySelector('.load-more-btn'),
};
let page = 1;
let userInput = null;

refs.searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  showLoader();
  page = 1;
  userInput = e.target.elements.query.value.trim();

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

  try {
    const {
      data: { hits, totalHits },
    } = await getPictures(userInput, page);
    if (hits.length === 0) {
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
    const markup = picturesTemplate(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    totalHits > 15 ? showBtn() : hideBtn();
  } catch (error) {
    console.log(error);
  } finally {
    refs.searchForm.reset();
    hideLoader();
  }
});

refs.loadmore.addEventListener('click', async e => {
  page += 1;
  showLoader();
  try {
    const {
      data: { hits, totalHits },
    } = await getPictures(userInput, page);
    refs.gallery.insertAdjacentHTML('beforeend', picturesTemplate(hits));
    lightbox.refresh();

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const lastPage = Math.ceil(totalHits / 15);
    if (page === lastPage) {
      hideBtn();
      iziToast.warning({
        title: 'Warning',
        message: "We're sorry, but you've reached the end of search results.",
        layout: 2,
        displayMode: 'once',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
        position: 'topRight',
      });
    }
  } catch (error) {
  } finally {
    hideLoader();
  }
});

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

function showBtn() {
  refs.loadmore.classList.remove('is-hidden');
}

function hideBtn() {
  refs.loadmore.classList.add('is-hidden');
}
