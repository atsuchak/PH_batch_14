/* 
    Assigment Life(Closures):

    Real-life scenario: On programming hero, every student gets 3 lives. Each time you submit an asignment LATE for 60 marks, you lose 1 life.
    when lives hit 0, you can't submit late assignment for 60 marks. you want ONE function that can create a frest, independent life-counter.

    createLifeCounter() -  retruns a function. Every time you call that returned function (on a late submission), it decreases a PRIVATE lives count by 1 and returns the remaining lives. There in no global variable staring lives - it lives only inside the closure.

    Input:
        const rahimlives = createLifeCounter();
        rahimLives();  // Late submission
        rahimLives();  // Late submission

    Output:
        2
        1
*/

const createLifeCounter = () => {
    let lives = 3;

    return () => {
        if(lives > 0) return --lives;
        else return `No life available`;
    }
}

const rahimlives = createLifeCounter();
const kahimlives = createLifeCounter();
const jahimlives = createLifeCounter();

console.log(`Rahim`, rahimlives());
console.log(`Rahim`, rahimlives());
console.log(`kahim`, kahimlives());
console.log(`Jahim`, jahimlives());
console.log(`kahim`, kahimlives());
console.log(`kahim`, kahimlives());
console.log(`Rahim`, rahimlives());
console.log(`Rahim`, rahimlives());
