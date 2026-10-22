//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
  // Write your code here

  if(typeof student !== "object") return `Invalid`;
  else return student.name === undefined || student.age === undefined || student.course === undefined? `Invalid` : `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

//Problem-02: Active User Filter
function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) return "Invalid";

    for (let user of users) 
        if (user.isActive === undefined) return "Invalid";

    let newUsers = users.filter(user => user.isActive === true);
    return newUsers;
}

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    // Write your code here…

    if(typeof caption !== "string") return `Invalid`;
    else {
        let hashtagCount = 0;
        let longestTag = "";

        let arr = caption.split(" ");
        // console.log(arr);

        for(let ar of arr) {
            if(ar.startsWith("#")) {
                hashtagCount++;
                ar = ar.slice(1);
                if(ar.length > longestTag.length) longestTag = ar;
            }
        }

        return {hashtagCount, longestTag};
    }
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    // Write your code here

    if(!Array.isArray(scores) || scores.length === 0) return `Invalid`;
    else {
        for(let score of scores) if(typeof score !== "number") return `Invalid`;

        let updatedScores = scores.map(score => score + 10);
        let total = updatedScores.reduce((accumulator, currVal) => {
            return accumulator + currVal
        }, 0);

        return total;
    }
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    for(let student of students) {
        if(student.name === undefined || student.score === undefined || typeof student.score !== "number") return `Invalid`;
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}

