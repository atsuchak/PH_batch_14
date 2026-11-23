type Gender = "Male" | "Female" | "Other";

type Student = {
    name: string;
    roll: number;
    group: string;
    ssc: number;
    gpa?: number;
    gender?: Gender
}

const sakin: Student = {
    name: "Sakin",
    roll: 123,
    group: "Science",
    ssc: 2027,
    gender: "Male"
}

const rakin: Student = {
    name: "Rakin",
    roll: 124,
    group: "Commerce",
    ssc: 2026,
    gpa: 4.5
}