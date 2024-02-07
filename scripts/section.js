import { getArea, parkAreaService, getService } from "./database.js";

export const createSectionHTML = () => {
  let sectionHTML = `<section class="areas">`;
  let areas = getArea();
  let services = parkAreaService();
  let tacos = getService();

  for (const area of areas) {
    let selectedServices = [];
    sectionHTML += `<div class="areaWrapper"><u>${area.attraction}:</u> <br>`;
    sectionHTML += `<ul class="serviceList">`;
    for (const service of services) {
      if (service.parkID === area.id) {
        selectedServices.push(service.serviceID);
      }
    }
    for (const selectedService of selectedServices) {
      for (const taco of tacos) {
        if (selectedService === taco.id) {
          sectionHTML += `<li class="serviceListItem">${taco.name}</li>`;
        }
      }
    }
    sectionHTML += `</ul>`;
    sectionHTML += `</div>`;
  }
  sectionHTML += `</section>`;
  return sectionHTML;
};
