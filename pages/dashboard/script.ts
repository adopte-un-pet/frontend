import {updateHead} from "~/data/update-head";
const title = "Adopter un animal : nos annonces et nos éleveurs"
const description = "Site communautaire dans lequel les éleveurs français d’animaux de compagnie pourront inscrire leur élevage et présenter les animaux destinés à la vente avec une fiche par animal."
const route = "/dashboard"

export default {
    name: "dashboard",
    layout: "dashboard",
    head: updateHead(title, description, route)
}
