import { getPets } from "./database.js"

document.addEventListener('click', e => {
    const elementClicked = e.target;
    if (elementClicked.id.startsWith("pet")) {
        const [, petPrimaryKey] = elementClicked.id.split("--");
        for (let pet of pets) {
            if (pet.id === parseInt(petPrimaryKey)) {
                window.alert(`${pet.name} barks at you`);
            }         
        }
    }
})

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}