function matchWinner(teamAGoals, teamBGoals) {
  // Write your code here…
    if(!Number.isInteger(teamAGoals) || !Number.isInteger(teamBGoals)) return "Invalid";
    else {
        if(teamAGoals === teamBGoals) return "Draw";
        else return teamAGoals > teamBGoals? "Team A Won" : "Team B Won";
    }
}