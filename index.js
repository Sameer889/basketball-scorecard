let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");
let homeScore = 0;
let guestScore = 0;

// add 1 number in home team
function add1Number() {
    homeScore += 1;
    homeCount.innerHTML = homeScore;
}

// add 2 number in home team
function add2Number() {
    homeScore += 2;
    homeCount.innerHTML = homeScore;
}

// add 3 number in home team
function add3Number() {
    homeScore += 3;
    homeCount.innerHTML = homeScore;
}

// add 1 number in guest team
function add4Number() {
    guestScore += 1;
    guestCount.innerHTML = guestScore;
}

// add 2 number in guest team
function add5Number() {
    guestScore += 2;
    guestCount.innerHTML = guestScore;
}

// add 3 number in guest team
function add6Number() {
    guestScore += 3;
    guestCount.innerHTML = guestScore;
}

// reset button
function resetButton() {
    homeScore = 0;
    guestScore = 0;
    homeCount.innerHTML = homeScore;
    guestCount.innerHTML = guestScore;
}