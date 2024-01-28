// Add imports above this line
import { galleryItems } from './gallery-items.js';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onClick);
document.addEventListener('keydown', onCloseModal);

const galleryItemList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryItemList);

function onClick(e) {
  e.preventDefault();
}

 function onCloseModal(e) {
  if(lightbox.isOpen && e.code === 'ESCAPE') {
    lightbox.isOpen='false' 
   }
 }

let lightboxModal = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

