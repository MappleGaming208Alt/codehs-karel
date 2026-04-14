
# 4.2.2 Logical Operators Quiz - Study Notes

### 📋 Question 1
**What symbol represents the *and* operator in JavaScript?**
* **Answer:** `&&`

### 📋 Question 2
**What symbol represents the *or* operator in JavaScript?**
* **Answer:** `||`

### 📋 Question 3
**After the following code runs, what is the value of `isWeekend`?**

```javascript
var isSaturday = true;
var isSunday = false;
var isWeekend = isSaturday || isSunday;
```
* **Answer:** `true`

---

### 💡 Key Concepts to Remember

#### 1. Logical Operator Symbols
In JavaScript, we don't use words for logic; we use symbols:
* **AND (`&&`)**: Both sides must be true.
* **OR (`||`)**: Only one side needs to be true.
* **NOT (`!`)**: Flips the value (true becomes false).

#### 2. The OR (`||`) Logic
In Question 3, the variable `isWeekend` becomes `true` because of the **OR** operator.
* **Logic:** `true || false` ⮕ **`true`**
* As long as at least one part of an OR expression is true, the whole thing is true.

#### 3. Syntax Matters
Symbols like `&` or `|` (single) are different operators entirely (Bitwise), and words like `AND` or `OR` will cause a "Reference Error" in your code. Always double up the symbols!
