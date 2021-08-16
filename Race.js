let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 25;
if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Racer  ${raceNumber}, your race commences at 9:30 am.`);
} else if (runnerAge > 18 && registeredEarly !== true) {
  console.log(`Racer ${raceNumber}, your race commences at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Racer ${raceNumber}, your race commences at 12:30 am.`);
} else {
  console.log(`Racer ${raceNumber}, kindly see the registration desk.`);
}
