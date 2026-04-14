# 4.2.6: Can You Graduate? - Code & Documentation

## 📋 Copy Code Below
```javascript
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
```

---

## 📖 Project Overview
This program uses **Logical AND (`&&`)** to determine if two specific conditions are met before a student can graduate.

### How it Works
1. **Inputs**: The program uses `readBoolean` to ask two "Yes/No" questions.
2. **The AND Condition**: The `&&` operator is strict. `canGraduate` will only be `true` if **BOTH** `hasUnits` and `metRequirements` are true.
3. **Output**: It prints the final boolean result.

### Truth Table for AND (&&)
| Has Units | Met Requirements | Can Graduate? |
| :--- | :--- | :--- |
| `true` | `true` | **`true`** |
| `true` | `false` | `false` |
| `false` | `true` | `false` |
| `false` | `false` | `false` |

---

## 🛠 Instructions
1. Copy the code block from the top of this file.
2. Paste it into your **CodeHS editor**.
3. Run the program and answer the prompts with `true` or `false` to test the logic.
