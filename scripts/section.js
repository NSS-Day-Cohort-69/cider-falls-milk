import { getArea, parkAreaService, getService } from "./database.js"



export const createSectionHTML = () => {
    let sectionHTML = `<section class="areawrapper">`
    let areas = getArea()
    let services = parkAreaService()
    let tacos = getService()

    for (const area of areas) {
        let selectedServices = []
        sectionHTML += `${area.attraction} <br>`
        sectionHTML += `<ul class="servicelist">`
        for (const service of services) {
            if (service.parkID === area.id) {
                selectedServices.push(service.serviceID)
            }
        }
        for (const selectedService of selectedServices) {
            for (const taco of tacos){
                if (selectedService === taco.id) {
                    sectionHTML += `<li class="servicelistitem">${taco.name}</li>`
                }
            }
        }
        sectionHTML += `</ul>`
    }
    sectionHTML += `</section>`
    return sectionHTML
}