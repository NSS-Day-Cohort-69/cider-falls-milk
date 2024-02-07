// Import functions from section and guest
import { createSectionHTML } from "./section.js";
import { createGuestHTML } from "./guest.js";
import { createServiceHTML } from "./services.js";

const sectionHTML = createSectionHTML();
const guestHTML = createGuestHTML();
const serviceHTML = createServiceHTML();

const parentElement = document.querySelector("#container");

const html = `
    <section class="services">${serviceHTML}</section>
    <section class="areas">${sectionHTML}</section>
    <aside class="guests">${guestHTML}</aside>
`;

parentElement.innerHTML = html;

// Declare variable, HTML, and assign it to the following:
/*
    Wrap sectionHTML in section
    Wrap guestHTML in aside (class="guests")
    */

// Use the .innerHTML property on parentElement to assign it to HTML
