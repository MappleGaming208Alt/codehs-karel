function start(){
    // 1. Ask the user for the first die roll
    var firstDie = readInt("First die roll: ");
    
    // 2. Ask the user for the second die roll
    var secondDie = readInt("Second die roll: ");
    
    // 3. Compare them using the equality operator (==)
    // This will result in true if they match, false if they don't
    var rolledDoubles = firstDie == secondDie;
    
    // 4. Print the result
    println("Rolled doubles: " + rolledDoubles);
}
