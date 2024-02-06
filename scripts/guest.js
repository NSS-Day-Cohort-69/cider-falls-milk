import { getGuest } from "./database.js"

const guests = getGuest()

export const createGuestHTML = () => {
    let html = '<ul class="guest-list">'

    for (const guest of guests) {
        html += `<li class="guest-item">${guest.firstName}${guest.lastName}</li>`
    }

    html += `</ul>`

    return html
}