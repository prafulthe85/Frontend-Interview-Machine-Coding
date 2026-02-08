# React Frontend Machine Coding Question

## 1. React State & Hooks

### Q1. Why do we use `useState`?
**Ans:** To manage component-level state and trigger UI re-render on data change.

### Q2. Why not use normal variables?
**Ans:** Normal variables do not trigger re-render → UI will not update.

### Q3. Why use `useMemo`?
**Ans:** To memoize expensive computations and avoid unnecessary recalculations.

### Q4. When should you avoid `useMemo`?
**Ans:** For cheap calculations → unnecessary complexity.

### Q5. Difference between `useMemo` and `useCallback`?
**Ans:**
- `useMemo` → memoizes values
- `useCallback` → memoizes functions

---

## 2. Pagination Logic

### Q6. Why implement pagination?
**Ans:** Improve performance, reduce UI load, enhance UX.

### Q7. How does pagination logic work?
**Ans:** currentPage → calculate indexes → slice data → render subset


### Q8. Why use `slice()`?
**Ans:** To extract only visible records for the current page.

### Q9. Why store `currentPage` in state?
**Ans:** Page change should re-render UI.

### Q10. Client-side vs Server-side pagination?
**Ans:**
- Client → fast UI, small data
- Server → scalable, large data

---

## 3. Forms & Validation

### Q11. Why controlled components?
**Ans:** Single source of truth, easier validation, predictable UI.

### Q12. Why lift state up?
**Ans:** To share data between child components.

### Q13. Why keep single form state?
**Ans:** Easier full-form validation and data consistency.

### Q14. Why sequential validation?
**Ans:** Prevent skipping mandatory inputs.

### Q15. Why validate before submit?
**Ans:** Prevent incorrect data submission.

---

## 4. Performance Optimization

### Q16. How do you prevent unnecessary re-renders?
**Ans:** `useMemo`, `useCallback`, `React.memo`.

### Q17. Why immutable state updates?
**Ans:** React detects changes via reference comparison.

### Q18. Why spread operator?
**Ans:** Create new object reference → trigger re-render.

### Q19. Why not mutate state directly?
**Ans:** React won't detect changes → UI bugs.

---

## 5. Architecture & Best Practices

### Q20. What is props drilling?
**Ans:** Passing data/functions through component hierarchy.

### Q21. Why component composition?
**Ans:** Reusability, cleaner structure, maintainability.

### Q22. Why separate logic & UI?
**Ans:** Cleaner code, easier debugging, better testing.

---

## 6. Rapid Fire (One-Liners)

- Why pagination? → Performance + UX
- Why tabs in forms? → Better UX for large forms
- Why controlled inputs? → Predictable state flow
- Why disable buttons? → Prevent invalid UI actions
- Why derive state? → Avoid redundancy

---

