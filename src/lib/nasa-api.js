import { randomDate } from './helpers';
import { show } from './display-media';

/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'GQfy9Uh3mCENV2xYl3mwVHZp7TaqnweqQzROx1hy';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  const newImageURL = `${URL}?api_key=${API_KEY}&date=${randomDate()}`;
  const result = await fetch(newImageURL);
  if (result.status < 200 || result.status >= 400) {
    console.error('Villa við að sækja gögn!');
    return null;
  }
  const data = await result.json();
  const { url } = data;
  const { title } = data;
  const text = data.explanation;
  const objData = [title, url, text];
  show(objData);
}
