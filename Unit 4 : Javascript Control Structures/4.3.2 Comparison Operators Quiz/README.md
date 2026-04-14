# 4.3.2 Comparison Operators Quiz - Study Notes

### 📋 Question 1
**What is the proper way to compare if two values are equal in a boolean expression in JavaScript?**
* **Answer:** `==`
* **Note:** Always use two equals signs when comparing. A single `=` is for assigning values to variables.

### 📋 Question 2
**What is the proper operator for “not equals” in JavaScript?**
* **Answer:** `!=`
* **Note:** The exclamation point `!` stands for "not," so `!=` literally translates to "not equal."

---

### 💡 Key Concepts to Remember

#### 1. Assignment vs. Comparison
This is the most common mistake for new programmers. 
* **`=` (Assignment):** "Make this variable equal to this value."
* **`==` (Comparison):** "Check if this value is the same as that value."

#### 2. Comparison Operator Cheat Sheet
| Operator | Meaning | Example | Result |
| :--- | :--- | :--- | :--- |
| `==` | Equal to | `5 == 5` | `true` |
| `!=` | Not equal to | `5 != 3` | `true` |
| `>` | Greater than | `10 > 2` | `true` |
| `<` | Less than | `2 < 10` | `true` |
| `>=` | Greater than or equal to | `5 >= 5` | `true` |
| `<=` | Less than or equal to | `4 <= 10` | `true` |

#### 3. Why `NOT EQUALS` or `EQUALS` doesn't work
JavaScript is a language with specific syntax rules. While words like `EQUALS` make sense in English, the computer only understands the mathematical symbols `==` and `!=`. Using words will cause the program to crash.
