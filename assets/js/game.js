/*Creates a *function* called "fight"
function fight () {
    window.alert ("The fight has begun!");*/

//allows user to interact with webpage to gather information AND capture the input
//window.prompt allows for input from user into the variable named "playerName"
//A variable is a named location for a value that gets stored in the browser's memory when a program is run.

//CLOSE EVERY LINE OF CODE WITH ;!!!!!!!!!
console.log("apple");


var playerName = window.prompt ("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth)

var enemyNames = ["Balthazar", "Roberto", "Karen"];
var enemyHealth = 50;
var enemyAttack = 12;


window.alert ("Welcome to Robot Gladiators");
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        //if player chooses to skip
        if (promptFight === "SKIP" || promptFight === "skip") {
            // confirm player skip
            var confirmSkip = window.confirm ("Are you sure you would like to quit?")
             
            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight! Goodbye.");
            //subtract money for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney" + playerMoney);
            break;
            }
    
            }
            
        
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            //Listing the variable on the left side means we'll store data to that variable, and listing the variable on the right side means we'll use the actual value that variable holds at that moment.
        
        enemyHealth = enemyHealth - playerAttack;
        
        // Log a resulting message to the console so we know that it worked.
        
        console.log(
            playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            )
        
        //check enemy health
        
        if (enemyHealth <= 0) {
            window.alert (enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        }
        
        else {
            window.alert (enemyName + " still has " + enemyHealth + " health left!");
        }    
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        
        playerHealth = playerHealth - enemyAttack;  
        
            // Log a resulting message to the console so we know that it worked.
        
        console.log(enemyName + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
        
        
        //check player health
        
        if (playerHealth <= 0) {
            window.alert (playerName + " has died!");
            break;
        }
        else {
            window.alert (playerName + " still has " + playerHealth + " health left.");
        }
        }
        //closing bracket on fight function...SUPER IMPORTANT KEEP EVERYTHING INSIDE THIS
    }

    
    //tells players fight has begun




//RUNS FIGHT FUNCTION
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}