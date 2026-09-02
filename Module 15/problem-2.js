function isElevatorSafe(weights) {
    // Write your code here
    let sum = 0;

    if(!Array.isArray(weights)) return "Invalid";
    else {
        for(let it of weights) {
            sum += it;
            if(sum > 400) return false;
        }
    }
    return true;
}
