//Import getServices, getAreas, get parkAreaServices
import { getService, getArea, parkAreaService } from "./database.js";

// GOAL: When clicking on a service list item, display where that service is available
// Need to: Create string of services; Create eventListeners to display area

// Create and export function that returns list of services in HTML format
// Assign getServices to variable, services
// Declare string variable, html, with opening tag of <p>
// Use a for of loop to iterate through services
// Append service.name to html
// Append closing tag of </p> to html
// return HTML
export const createServiceHTML = () => {
  const services = getService();
  let htmlStr = "<p>";
  for (const service of services) {
    if (htmlStr === "<p>") {
      htmlStr += `<span data-id="${service.id}" data-name="${service.name}" data-type="service"><u><b>Park Services:</b></u><br> ${service.name}</span>`;
    } else {
      htmlStr += `, <span data-id="${service.id}" data-name="${service.name}" data-type="service">${service.name}</span>`;
    }
  }
  htmlStr += `</p>`;

  return htmlStr;
};

// Declare eventListener
// Declare serviceItem
// Declare serviceId
// Declare empty string variable, areaList
// Assign getServices, getAreas, and parkAreaServices to services, areas, and parkAreaServices, respectively
// Triple nested for of loop top iterate through all 3 arrays
// If statement to match parkAreaServices id to services id
// If statement to find all matching areaIds
// Append area.name to areaList if areaList === ""
// Else, append ", area.name"
// Window alert service.name can be found at areaList
document.addEventListener("click", (serviceClicked) => {
  const serviceItem = serviceClicked.target;

  const serviceId = parseInt(serviceItem.dataset.id);
  const serviceName = serviceItem.dataset.name;
  const areas = getArea();
  const areasAndServices = parkAreaService();
  const listOfAreaIds = [];

  if (serviceItem.dataset.type === "service") {
    for (const areaAndService of areasAndServices) {
      if (serviceId === areaAndService.serviceID) {
        listOfAreaIds.push(areaAndService.parkID);
      }
    }

    const listOfAreas = [];

    for (const areaId of listOfAreaIds) {
      for (const area of areas) {
        if (areaId === area.id) {
          listOfAreas.push(area.attraction);
        }
      }
    }

    const areasString = listOfAreas.join(" and ");
    window.alert(`${serviceName} is available in ${areasString}`);
  }
});
