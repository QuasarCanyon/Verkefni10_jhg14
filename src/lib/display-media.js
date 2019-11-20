import getRandomImage from "./nasa-api";

// todo vísa í rétta hluti með import

// breytur til þess að halda utan um html element nodes
let title; // titill fyrir mynd á forsíðu
let text; // texti fyrir mynd á forsíðu
let img; // mynd á forsíðu

let image; // object sem inniheldur núverandi mynd á forsíðu.

/*
 * Sækir nýja mynd af handahófi frá Nasa API.
 */
function getNewImage() {
  getRandomImage();
}

/*
 * Birtir mynd frá NASA API á forsíðunni ásamt titli og texta.
 */
  export function show(imageData) {
  const title = imageData[0];
  const img = imageData[1];
  const text = imageData[2];

  const imageElement = document.querySelector('.apod__image');
  imageElement.setAttribute('src', img);

  const titleElement = document.querySelector('.apod__title');
  titleElement.appendChild(document.createTextNode(title));

  const textElement = document.querySelector('.apod__text');
  textElement.appendChild(document.createTextNode(text));
}

/*
 * Vistar núverandi mynd í storage.
 */
function saveCurrentImage() {
  const savedNumber = window.Storage.length;
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init(apod) {
  const newImageButton = document.querySelector('.button--new-image');
  const saveImageButton = document.querySelector('.button--save-image');
  const viewImageButton = document.querySelector('.button--view-img');

  newImageButton.addEventListener('click', getNewImage);
  saveImageButton.addEventListener('click', saveCurrentImage);
  viewImageButton.addEventListener('click', loadFavourites);

  getNewImage();
}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {

}
