function start(){
    // 1. Ask the user if they have enough units
    var hasUnits = readBoolean("Do you have enough units? ");
    
    // 2. Ask the user if they met the requirements
    var metRequirements = readBoolean("Have you met the requirements? ");
    
    // 3. Check if both are true using the AND operator (&&)
    var canGraduate = hasUnits && metRequirements;
    
    // 4. Print the result
    println("Can graduate: " + canGraduate);
}
