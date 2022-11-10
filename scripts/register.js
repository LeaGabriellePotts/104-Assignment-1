//Assignment 1 

//- Use an alert function to display how many pets are registered in the salon.
//- Create a function to display each pet's name on the console.

//-Add CSS style to the index.html.


//object literal notation:
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street: "University",
        number: "262",
        zipcode: "22400"
    },
    pets:[
        {
            name:"Scooby",
            age: 60,
            gender:"male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            contactPhone:"555-555-1234"
        },
        {
            name:"Deefer",
            age: 6,
            gender:"male",
            breed:"mut",
            service:"wash",
            owner:"Katie",
            contactPhone:"555-555-2345"
        },
        {
            name:"Princess",
            age: 11,
            gender:"female",
            breed:"Golden Retriever",
            service:"nail trim",
            owner:"Edwin",
            contactPhone:"555-555-3456"
        }
    ]
}
console.log(petSalon.address.street);

function displayPetNumber(){
alert("There are " + petSalon.pets.length + " pets registered");

}
function displayNames(){

//     //alert to display the length (number of pets registered in salon)
//     //create a function to display each of the pet names on the console
//         //***use a for loop */
    for (let i=0;i<petSalon.pets.length;i++){
        console.log(petSalon.pets[i].name)
    }
}
displayNames();
displayPetNumber();
