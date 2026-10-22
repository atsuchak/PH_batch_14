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

console.log(bonusScore([80, 65, 90, 75]));