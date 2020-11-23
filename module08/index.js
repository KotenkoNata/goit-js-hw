import galleryItems from './gallery-items.js';

function createLi() {
  const li = document.createElement('li');
  li.className = 'gallery__item';
  return li;
}

function createLink({ original }) {
  const a = document.createElement('a');
  a.className = 'gallery__link';
  a.href = original;
  return a;
}

function createImg(liConfig, index) {
  const img = document.createElement('img');
  img.className = 'gallery__image';
  img.src = liConfig.preview;
  img.dataset.source = liConfig.original;
  img.alt = liConfig.description;
  img.dataset.index = index;
  return img;
}

// Create HTML elements
const liListGallery = galleryItems.map(function (liConfig, index) {
  const li = createLi();
  const a = createLink(liConfig);
  const img = createImg(liConfig, index);

  a.appendChild(img);
  li.appendChild(a);

  return li;
});

const galleryRef = document.querySelector('.gallery'); /// find the ul

galleryRef.append(...liListGallery); /// add li to ul

const jsGalleryRef = document.querySelector('ul.js-gallery');

const jsLigthBox = document.querySelector('div.lightbox');

const lightboxImage = document.querySelector('img.lightbox__image');

const lightBoxOverlay = document.querySelector('div.lightbox__overlay');

const jsModalCloseBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);

// Open Modal with the original image
const handleImageClick = function (event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const img = event.target;
  const src = img.dataset.source;
  const alt = img.alt;
  const index = img.dataset.index;

  jsLigthBox.classList.add('is-open');

  setImageForModal(src, alt, index);
  // Listen event on keyboard buttons press
  document.addEventListener('keydown', handleKeyboardPress);
};

jsGalleryRef.addEventListener('click', handleImageClick);

jsModalCloseBtn.addEventListener('click', closeModal);

lightBoxOverlay.addEventListener('click', closeModal);

function handleKeyboardPress(event) {
  if (event.code == 'Escape') {
    closeModal(event);
    return;
  }
  if (event.code == 'ArrowRight') {
    changeImageRight(event);
    return;
  }

  if (event.code == 'ArrowLeft') {
    changeImageLeft(event);
    return;
  }
}

// Changes parameters for the image inside Modal
function setImageForModal(src, alt, index) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxImage.dataset.index = index;
}

// Change iamge Left
function changeImageLeft() {
  let index = parseInt(lightboxImage.dataset.index);
  index = index - 1;
  if (index >= 0) {
    const imageConfig = galleryItems[index];

    setImageForModal(imageConfig.original, imageConfig.description, index);
  }
}

// Change image right
function changeImageRight() {
  let index = parseInt(lightboxImage.dataset.index);
  index = index + 1;
  if (index < galleryItems.length) {
    const imageConfig = galleryItems[index];

    setImageForModal(imageConfig.original, imageConfig.description, index);
  }
}

// clearing src
function closeModal(event) {
  event.preventDefault();
  jsLigthBox.classList.remove('is-open');

  // Listen event on keyboard buttons press
  document.removeEventListener('keydown', handleKeyboardPress);

  setImageForModal('', '', '');
}
