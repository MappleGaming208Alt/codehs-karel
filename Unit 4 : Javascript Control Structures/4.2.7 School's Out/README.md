
# 4.2.7: School's Out - Code & Documentation

## 📋 Copy Code Below
```javascript
function start(){
    // 1. Ask if it is a weekday
    var isWeekday = readBoolean("Is today a weekday? ");
    
    // 2. Ask if it is a holiday
    var isHoliday = readBoolean("Is today a holiday? ");
    
    // 3. Determine if school is out
    // School is out if it's a holiday OR if it's NOT a weekday
    var noSchoolToday = isHoliday || !isWeekday;
    
    // 4. Print the result
    println("There is no school today: " + noSchoolToday);
}
```

---

## 📖 Project Overview
This program determines if school is out by combining the **OR (`||`)** operator and the **NOT (`!`)** operator.

### How it Works
1. **Inputs**: It takes two booleans: whether it is a weekday and whether it is a holiday.
2. **The Logic**: 
    * `!isWeekday`: This flips the value. If it's **not** a weekday (Saturday/Sunday), this becomes `true`.
    * `isHoliday || ...`: If either part is `true`, then `noSchoolToday` becomes `true`.
3. **The Result**: School is out if it's a holiday **OR** if it's the weekend.

### Logic Table
| isWeekday | isHoliday | !isWeekday | noSchoolToday |
| :--- | :--- | :--- | :--- |
| `true` (Mon-Fri) | `false` | `false` | **`false`** (School is on) |
| `true` (Mon-Fri) | `true` | `false` | **`true`** (Holiday!) |
| `false` (Weekend) | `false` | `true` | **`true`** (It's the weekend) |

---

## 🛠 Instructions
1. Copy the code block from the top.
2. Paste it into the **CodeHS editor**.
3. Run the program and test different scenarios (like a holiday on a weekday).
