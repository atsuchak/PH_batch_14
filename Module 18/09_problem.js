/* 
    Safe Nested Access: SAfely access deeply nested optional data using ?. and ?? without throwing errors.

    Example: user?.address?.city ?? "City not found" when address is undefined
*/

let user1 = {
    name: "Suchak",
    address: {
        area: "Agargaon",
        city: "Dhaka",
        country: "Bangladesh"
    }
}
let user2 = {
    name: "Sakin",
}

const getCity = (user) => user?.address?.city;

console.log(getCity(user1));
console.log(getCity(user2));