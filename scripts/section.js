import { getArea, parkAreaService} from "./database"



export const createSectionHTML = () => {
    let sectionHTML = `insert starter html here`
    let areas = getArea()
    let services = parkAreaService()

    for (const area of areas) {
        let selectedServices = []
        sectionHTML += `${area.attraction} <br>`
        for (const service of services) {
            if (service.parkID === area.id) {
                selectedServices.push(service.serviceID)
            }
        }
        for (const selectedService of selectedServices) {
            for (const service of services){
                if (selectedService.id === service.id) {
                    sectionHTML += `${service.name}`
                }
            }
        }
    }
    sectionHTML += `closing html`
    return sectionHTML
}