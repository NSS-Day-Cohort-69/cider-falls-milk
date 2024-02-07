import { getGuest } from "./database.js";

const guests = getGuest();

export const createGuestHTML = () => {
  let html = '<ul class="guest-list"><b><u>Guests:</u></b><br><br>';

  for (const guest of guests) {
    html += `<li class="guest-item">${guest.firstName} ${guest.lastName}</li><br>`;
  }

  html += `</ul>`;

  return html;
};
