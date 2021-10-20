/*Creates a *function* called "fight"
function fight () {
    window.alert ("The fight has begun!");*/

//allows user to interact with webpage to gather information AND capture the input
//window.prompt allows for input from user into the variable named "playerName"
//A variable is a named location for a value that gets stored in the browser's memory when a program is run.

//CLOSE EVERY LINE OF CODE WITH ;!!!!!!!!!

var playerName = window.prompt ("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName,playerHealth, playerAttack)

var enemyName = "Balthazar";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //tells players fight has begun
window.alert ("Welcome to Robot Gladiators");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    //Listing the variable on the left side means we'll store data to that variable, and listing the variable on the right side means we'll use the actual value that variable holds at that moment.

enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.

console.log(playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

//check enemy health

if (enemyHealth <= 0) {
    window.alert (enemyName + " has died!");
}

else {
    window.alert (enemyName + " still has " + enemyHealth + " health left!");
}    
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

playerHealth = playerHealth - enemyAttack  

    // Log a resulting message to the console so we know that it worked.

console.log(enemyName + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


//check player health

if (playerHealth <= 0) {
    window.alert (playerName + " has died!");
}
else {
    window.alert (playerName + " still has " + playerHealth + " health left.");
}

//closing bracket on fight function...SUPER IMPORTANT KEEP EVERYTHING INSIDE THIS
}

//RUNS FIGHT FUNCTION
fight();