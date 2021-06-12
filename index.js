// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";


// Write code to generate the LC04 report here:

let dashes = "-------------------------------------";
console.log();
console.log(dashes);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(dashes);
console.log("Date: " + date);
console.log("Time: " + time);
console.log();
console.log(dashes);
console.log("> ASTRONAUT INFO");
console.log(dashes);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log();
console.log(dashes);
console.log();
console.log("> FUEL DATA");
console.log(dashes);
console.log("* Fuel temp celsius: " + fuelTempCelsius + "C");
console.log("* Fuel level: " + fuelLevel);
console.log();
console.log(dashes);
console.log("> MASS DATA");
console.log(dashes);
console.log("* Crew mass: " + crewMassKg + "kg");
console.log("* Fuel mass: " + fuelMassKg + "kg");
console.log("* Shuttle mass: " + shuttleMassKg + "kg");
console.log("* Total mass: " + totalMassKg + "kg");
console.log();
console.log(dashes);
console.log("> FLIGHT PLAN");
console.log(dashes);
console.log("* weather: " + weatherStatus);
console.log();
console.log(dashes);
console.log("> OVERALL STATUS");
console.log(dashes);
if(astronautCount > 5 == true && astronautStatus == "ready" == true && totalMassKg < 1000000 == true && fuelTempCelsius == -225 == true && fuelLevel == "100%" == true && weatherStatus == "clear" == true){
  console.log("* Clear for takeoff: YES");
}
else{
  console.log("* Clear for takeoff: NO");
}

// When done, have your TA check your code.

/* 
~*~ Note: I don't understand who to correctly to the 4.10.5. Bonus Mission! what I have below does not seem to work! 

const input = require('readline-sync');
let astronautCount = input.question("Enter the number of astronauts going on the mission: ");
console.log(astronautCount)

*/

// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.


