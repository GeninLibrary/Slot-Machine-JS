/* This is a slot machine function.
*
* The function will take "x" number of quarters 
* and compare that variable to "y" which is equal to
* a randomly generated amount of quarters required to win
*/


function quartersAndSlots(quarters) {

    var quarters = quarters;
    var jackpot = Math.trunc(Math.random()*100);

    // Establish the loop conditions. For "x" quarters, "x" >= 0, run loop, quarters now = "x-1"
    for (quarters; quarters >= 0; quarters--) {
        
        
        // If random probability per quarter == jackpot
        if (quarters > 0 && (Math.trunc(Math.random() * 100)) == jackpot) {
            console.log("Winner winner chicken dinner");
            quarters = quarters + (Math.trunc(Math.random() * 50) + 50);
            console.log("You still have " + quarters + " left");
            break;
        }

        // If random probability per quarter != jackpot and quarters is not 0
        else if (quarters > 0 && Math.trunc(Math.random() * 100) != jackpot) {
            console.log("You're losing money. No bueno.");
        }

        // If quarters == 0
        else {
            console.log("You're broke.");
        }
    }
}

quartersAndSlots(100);