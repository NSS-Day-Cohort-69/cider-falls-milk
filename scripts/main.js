// Import functions from section and guest
import { createSectionHTML } from "./section.js";
import { createGuestHTML } from "./guest.js";

const sectionHTML = createSectionHTML();
const guestHTML = createGuestHTML();

const parentElement = document.querySelector("#container");

const html = `
    <section>${sectionHTML}</section>
    <div>${guestHTML}</div>
`;

parentElement.innerHTML = html;

// Declare variable, HTML, and assign it to the following:
/*
    Wrap sectionHTML in section
    Wrap guestHTML in aside (class="guests")
    */

// Use the .innerHTML property on parentElement to assign it to HTML
