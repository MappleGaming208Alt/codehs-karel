
## 📝 4.3.7: AP Practice (Comparison Operators)

### Question 1: Simple OR Logic
**Expression:** `7 = 6 OR 8 ≥ 4`
* **Breakdown:** `false OR true`
* **Result:** `true` (OR only needs one side to be true).

### Question 2: Compound Logic
**Expression:** `(9 ≠ 13 AND 12 < 4) OR 15 < 9`
* **Breakdown:** `(true AND false) OR false` ⮕ `false OR false`
* **Result:** `false`

### Question 3: Distributive Law
**Expression:** `a AND (b OR c)`
* **Rule:** You can distribute the `AND` over the `OR`.
* **Equivalent:** `(a AND b) OR (a AND c)`

### Question 4: De Morgan's Law
**Expression:** `(a OR b) AND NOT (c OR d)`
* **Rule:** Distributing a `NOT` inside a parentheses flips the variables and the operator (`OR` becomes `AND`).
* **Equivalent:** `(a OR b) AND (NOT c) AND (NOT d)`

---

## 💡 Key Takeaways
1. **AND (&&)** is strict; both must be true.
2. **OR (||)** is flexible; only one must be true.
3. **NOT (!)** is the flipper; it turns true to false and vice-versa.
4. **De Morgan's:** When moving a `NOT` inside, **flip the sign**.
