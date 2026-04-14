# 4.3.5: Rolling Dice - Code & Documentation

## 📋 Copy Code Below
```javascript
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
```

---

## 📖 Project Overview
This program checks if two dice rolls are identical (rolling "doubles") using the **Equality Operator (`==`)**.

### How it Works
1. **Integer Input**: Since dice rolls are whole numbers, we use `readInt` instead of `readBoolean`.
2. **Comparison**: The code compares `firstDie` and `secondDie`. 
    * If they are the same (e.g., 4 and 4), `rolledDoubles` becomes `true`.
    * If they are different (e.g., 2 and 5), `rolledDoubles` becomes `false`.
3. **Boolean Result**: The result of a comparison is always a boolean value.

### Key Distinction
* **`=`**: Sets a variable (Assignment).
* **`==`**: Checks if two things are equal (Comparison).

---

## 🛠 Instructions
1. Copy the code block from the top.
2. Paste it into the **CodeHS editor**.
3. Run the program and enter two numbers to see if you rolled doubles!
