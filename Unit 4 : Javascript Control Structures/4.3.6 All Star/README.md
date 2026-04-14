# 4.3.6: All Star - Code & Documentation

## 📋 Copy Code Below
```javascript
function start(){
    // 1. Get the three stats from the user
    var points = readInt("Points per game: ");
    var rebounds = readInt("Rebounds per game: ");
    var assists = readInt("Assists per game: ");
    
    // 2. Check the conditions
    // Path 1: 25+ points
    // Path 2: 10+ in all three categories
    var isAllStar = (points >= 25) || (points >= 10 && rebounds >= 10 && assists >= 10);
    
    // 3. Print the result
    println("Is an All Star: " + isAllStar);
}
```

---

## 📖 Project Overview
This program determines "All Star" status by combining **Comparison Operators** (`>=`) and **Logical Operators** (`||` and `&&`).

### How it Works
1. **Multiple Inputs**: The program collects three different integer values from the user.
2. **Compound Logic**: To be an All Star, a player needs to meet one of two criteria:
    * **Criteria A**: Scoring high (`points >= 25`).
    * **Criteria B**: Being well-rounded (`points`, `rebounds`, **AND** `assists` all `>= 10`).
3. **Operator Order**: The parentheses ensure the program checks the "well-rounded" stats as one single group before comparing it to the high-scorer requirement.

### Logic Breakdown
* `||` (OR): Used because the player only needs to satisfy **one** of the two main paths.
* `&&` (AND): Used because the second path requires **all three** stats to be 10 or higher.
* `>=` (Greater than or equal to): Used because the requirement is "at least" a certain number.

---

## 🛠 Instructions
1. Copy the code block from the top.
2. Paste it into the **CodeHS editor**.
3. Run the program and try different stat combinations (e.g., 25 points with 0 rebounds, or 10 points/10 rebounds/10 assists).
