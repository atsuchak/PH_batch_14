const person = {
    name: 'Ahnaf Tajwar Suchak',
    proffession: 'Student', 
    age: 22,
    isFailed: false,
    'home address': 'Bangladesh'
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

// delete keyword
console.log(person);  // Before delete
delete person.isFailed;
delete person['home address'];
console.log(person);  // After delete


// nested object
const school = {
    name: "Monipur High School",
    est: 1992,
    location: 'Shewrapara', 
    students: 1334,
    events: ['21 Fab', '26 March', '16 Dec'], 
    people: {
        count: 200,
        principle: {
            name: 'Mr. prince', 
            age: 87,
            gender: 'male'
        }, 
        teacher: {
            name: 'Onek teachers', 
            num: 100,
            quality: 'Good'
        }
    }
}
console.log(school);
console.log(school.people);
console.log(school.people.principle);
console.log(school.people.teacher.quality);

school.events[1] = 'Another event';
console.log(school);