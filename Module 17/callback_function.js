function studentRegister(cb) {
    console.log("Student is registering. Need more data");

    cb();
}

function studentBasicInfo() {
    let student = {
        name: "Suchak", 
        roll: 23, 
        age: 22
    }

    console.log(student);
}

studentRegister(studentBasicInfo);