function calculateAiCost(tokensUsed) {
    // Write your code here.
    if(!Number.isInteger(tokensUsed) || tokensUsed < 0) return "Invalid";
    else {
        tokensUsed -= 500;

        return tokensUsed < 0? 0 : Math.floor(tokensUsed/100) * 5;
    }
}