import { getArea, parkAreaService, getService } from "./database"



export const createSectionHTML = () => {
    let sectionHTML = `<section class="areas"`
    let areas = getArea()
    let services = parkAreaService()
    let tacos = getService()

    for (const area of areas) {
        let selectedServices = []
        sectionHTML += `${area.attraction} <br>`
        for (const service of services) {
            if (service.parkID === area.id) {
                selectedServices.push(service.serviceID)
            }
        }
        for (const selectedService of selectedServices) {
            for (const taco of tacos){
                if (selectedService.id === taco.id) {
                    sectionHTML += `${taco.name}`
                }
            }
        }
    }
    sectionHTML += `</section>`
    return sectionHTML
}