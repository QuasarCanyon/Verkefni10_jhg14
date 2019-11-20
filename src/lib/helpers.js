
/**
 * Hreinsa börn úr elementi
 *
 * @param {object} element Element sem á að hreinsa börn úr
 */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Búa til element og aukalega setja börn ef send með
 *
 * @param {string} name Nafn á element
 * @param  {...any} children Börn fyrir element
 */
export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

/**
* Skilar tölu af handahófi á bilinu [min, max]
*/
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Býr til dagsetningu af handahófi á forminu YYYY-MM-DD
 */
export function randomDate() {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDate();
  const year = randomNumber(1995, todayYear);
  let month;
  if (year === 1995) {
    month = randomNumber(6, 12);
  } else if (year === todayYear) {
    month = randomNumber(1, todayMonth);
  } else {
    month = randomNumber(1, 12);
  }
  let day;
  if (year === 1995 && month === 6) {
    day = randomNumber(16, 30);
  } else if (year === todayYear && month === todayMonth) {
    day = randomNumber(1, todayDay);
  } else if (year % 4 === 0 && month === 2) {
    day = randomNumber(1, 29);
  } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    day = randomNumber(1, 31);
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    day = randomNumber(1, 30);
  } else {
    day = randomNumber(1, 28);
  }
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  const pictureDate = year + '-' + month + '-' + day;
  return pictureDate;
}