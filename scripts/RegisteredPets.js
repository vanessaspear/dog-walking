import { getPets } from "./database.js"

import { getWalkers } from "./database.js"

document.addEventListener('click', e => {
    const elementClicked = e.target;
    if (elementClicked.id.startsWith("pet")) {
        const [, petPrimaryKey] = elementClicked.id.split("--");
        for (let pet of pets) {
            if (pet.id === parseInt(petPrimaryKey)) {
                for (let walker of walkers) {
                    if (pet.walkerId === walker.id) {
                        window.alert(`${pet.name} is walked by ${walker.name}`);
                    }
                }
            }         
        }
    }
})

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}