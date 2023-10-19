// import * as basicLightbox from "basiclightbox";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", handlerClick);

createMarkup(galleryItems, gallery);

function createMarkup(galleryItems, targetElement) {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    )
    .join("");

  targetElement.insertAdjacentHTML("afterbegin", markup);
}

function handlerClick(event) {
  event.preventDefault();

  if (event.currentTarget === event.target) {
    return;
  }

  const originalImage = event.target.dataset.source;

  crateModal(originalImage);
}

function crateModal(originalImage) {
  const instance = basicLightbox.create(`
      <img src="${originalImage}" width="800" height="600">`);

  instance.show();
}
