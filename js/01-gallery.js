import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", handlerClick);

createMarkup(galleryItems, gallery);

let modal;

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

  modal = crateModal(originalImage);
  modal.show();

  if (modal.visible()) {
    document.addEventListener("keydown", handlerEscape);
  }
}

function crateModal(originalImage) {
  const newInstance = basicLightbox.create(
    `<img src="${originalImage}" width="800" height="600">`
  );

  return newInstance;
}

function handlerEscape(event) {
  if (event.code === "Escape") {
    modal.close();

    document.removeEventListener("keydown", handlerEscape);
  }
}
