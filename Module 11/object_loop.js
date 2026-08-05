const person = {
    name: 'Ahnaf Tajwar Suchak',
    proffession: 'Student', 
    age: 22,
    isFailed: false,
    'home address': 'Bangladesh'
}

/* 
    For ... of --> Array
    For ... in --> Object
*/

for(const key in person) {
    console.log(key);
    const value = person['name'];
    console.log(key, value);
}