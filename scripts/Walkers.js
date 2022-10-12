import { getWalkerCities, getWalkers, getCities } from "./database.js"

const walkers = getWalkers()

const cities = getCities();

const walkerCities = getWalkerCities();

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [,walkerId] = itemClicked.id.split("--")

            /*
                Now that you have the primary key of a walker object,
                iterate the walkerCities array and compare the walkerID to the walkerCities.walkerID.  If a match is found, add the cityID to the currentWalkerCity array.
            */
                //find the walker's name 
                let walkerName = "";
                for (let walker of walkers)
                    if (parseInt(walkerId) === walker.id) {
                        walkerName = walker.name;
                    }

                //Find the city IDs for each city the walker services
                let currentWalkerCityIds = [];
                for (let city of walkerCities) {
                    if (parseInt(walkerId) === city.walkerId) {
                        currentWalkerCityIds.push(city.cityId);
                    }
                }

                //Find the city name for each city the walker services using the city IDs
                let currentWalkerCityNames = "";
                for (let city of cities) {
                    for (let walkerCityId of currentWalkerCityIds) {
                        if (city.id === walkerCityId) {
                            currentWalkerCityNames += `${city.name} `
                        }
                    }
                }

                //Create an alert message when the walker is clicked on from the web page
                window.alert(`${walkerName} services ${currentWalkerCityNames}`)
                
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML;
}

/*

 walkers: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        city: "Chicago"

walkerCities: [
        { id: 1, walkerId: 10, cityId: 1 },

 cities: [
        { id: 1, name: "Pittsburgh"},
*/