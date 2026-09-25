/* 
    User Lookup by ID
    findUserById(users, id) - find and return the single user object whose id matches. If no matches, returns "User not found".

    Input:
        users = [
            {id: 1, name: "Rafi"},
            {id: 2, name: "Karim"},
        ]
        id = 2

    Output:
        {id: 2, name: "Karim"}
*/

// let users = [
//     {id: 1, name: "Rafi"},
//     {id: 2, name: "Karim"},
//     {id: 3, name: "Suchak"}    
// ]

let findUserById = (users, id) => {
    let expectedUser = users.find(user => {
        return user.id === id;
    });
    // console.log(expectedUser, "expectedUser");
    if(!expectedUser) return `User not found`;
    return expectedUser;
}

let users = [
    {id: 1, name: "Rafi"},
    {id: 2, name: "Karim"},
    {id: 3, name: "Suchak"},    
    {id: 4, name: "Alu"}    
]

console.log(findUserById(users, 2));;