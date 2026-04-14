function start(){
    // 1. Get the three stats from the user
    var points = readInt("Points per game: ");
    var rebounds = readInt("Rebounds per game: ");
    var assists = readInt("Assists per game: ");
    
    // 2. Check the conditions
    // Path 1: 25+ points
    // Path 2: 10+ in all three categories (a "Triple-Double" light)
    var isAllStar = (points >= 25) || (points >= 10 && rebounds >= 10 && assists >= 10);
    
    // 3. Print the result
    println("Is an All Star: " + isAllStar);
}
