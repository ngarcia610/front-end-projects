let homeScore = 0;
let guestScore = 0;

function updateScore(team, points) {
  if (team === "home") {
    homeScore += points;
    document.getElementById("home-score").textContent = homeScore;
  } else if (team === "guest") {
    guestScore += points;
    document.getElementById("guest-score").textContent = guestScore;
  }
}