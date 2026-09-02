//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  // Write your code here…
    if(!Number.isInteger(teamAGoals) || !Number.isInteger(teamBGoals)) return "Invalid";
    else {
        if(teamAGoals === teamBGoals) return "Draw";
        else return teamAGoals > teamBGoals? "Team A Won" : "Team B Won";
    }
}

//Problem-02: Elevator Weight Safety Checker
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


//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    // Write your code here.
    if(!Number.isInteger(tokensUsed) || tokensUsed < 0) return "Invalid";
    else {
        tokensUsed -= 500;

        return tokensUsed < 0? 0 : Math.floor(tokensUsed/100) * 5;
    }
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    // Write your code here
    if(!Array.isArray(restaurants) || restaurants.length === 0) return "Invalid";
    else {
        let mxRate = restaurants[0].rating;
        let mxName = restaurants[0].name;

        for(let it of restaurants) 
            if(it.rating > mxRate) return it.name.toUpperCase();
        
        return mxName.toUpperCase();
    }
}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(!Number.isInteger(times[i])) return "Invalid";
        total = total + times[i];
    }

    return total / times.length;
}

