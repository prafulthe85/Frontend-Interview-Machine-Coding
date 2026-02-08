# Tab Form Component - Q&A

## Quick Q&A

| Question | Answer |
|----------|--------|
| **State Management** | Single `data` object holds all form fields; persists across tabs via props |
| **Validation Strategy** | Sequential validation before tab navigation & submission; fails = jump to first invalid tab |
| **Controlled Inputs** | Value from state, onChange updates state → React is single source of truth |
| **Data Flow** | Props drilling: `data`, `setData`, `errors` passed parent → children |
| **Dynamic Tabs** | `const ActiveTabComponent = tabs[active].component;` eliminates if-else |
| **Error Messages** | `{errors.name && <span>...}` - renders only when error exists |
| **Checkbox Toggle** | `includes()` check → filter to remove OR spread to add |
| **Radio Selection** | Uses `name` attribute; shared name = auto deselect previous |
| **Immutability** | Spread operator `{...prev}` creates new object instead of mutating |
| **setState Patterns** | Function-based `(prev) => {...}` beats value-based to avoid stale state |

---

## Architecture Overview

```
TabForm (State Container)
├── active: 0|1|2          ← Which tab to show
├── data: {...}            ← Form data persists here
├── errors: {...}          ← Validation errors
│
└─ Dynamic Child Component
   ├── Profile (name, age, email)
   ├── Settings (theme radio)
   └── Interests (checkboxes)
```

---

## Validation Flow

```
Try Next →  Validate Current Tab
              ├─ YES → Navigate
              └─ NO → Stay on tab

Submit →    Validate ALL Tabs
              ├─ Any fail → Jump to first invalid
              └─ All pass → Reset form & submit
```

---

## Key Patterns

### **Controlled Component**
```javascript
<input value={name} onChange={handleChange} />
```
- React controls input value
- Enables validation & persistence

### **Immutable Update**
```javascript
setData(prev => ({...prev, field: value}))
```
- Creates new object
- Triggers React re-render

### **Array Toggle (Checkboxes)**
```javascript
interests: exists ? prev.filter(...) : [...prev, item]
```
- Filter to remove
- Spread to add

### **Conditional Render**
```javascript
{errors.name && <span>{errors.name}</span>}
```
- Only renders if error exists

---

## State Types

| State | Purpose | Values |
|-------|---------|--------|
| `active` | Current tab index | 0, 1, 2 |
| `data` | Form fields | {name, age, email, interests, theme} |
| `errors` | Validation errors | {name?, age?, email?, interests?} |

---

## Common Pitfalls

❌ **Direct mutation**: `data.name = 'value'` - React won't detect  
✅ **Use spread**: `{...prev, name: 'value'}`

❌ **Stale state**: `setData({...data, ...})` in loops  
✅ **Function form**: `setData(prev => ({...prev, ...}))`

❌ **Props drilling too deep**: Pass through many components  
✅ **Use Context API**: For 3+ levels of nesting

❌ **Uncontrolled inputs**: `<input defaultValue={data} />`  
✅ **Controlled**: `<input value={data} onChange={...} />`

---

## Interview-Specific Topics

### **Form State Management Best Practices**
- **Lifting state up**: Why centralize in parent?
  - Single source of truth
  - Easier to reason about
  - Simplifies testing
- **When to use Context?** 3+ levels of props drilling
- **When to use Redux?** Complex form with many interactions

### **Performance Optimization**
- **useCallback**: Memoize tab change handlers to avoid child re-renders
- **useMemo**: Cache validation functions for expensive operations
- **Virtualization**: If 100+ tabs, render only visible ones

### **Accessibility Concerns**
- Radio buttons need proper `id` and `<label for>` association
- Error messages should have `aria-live="polite"`
- Tab buttons need `aria-selected` attribute
- Keyboard navigation: Tab/Shift+Tab should work

### **Real-world Improvements**
- **Debounced validation**: Avoid re-validating on every keystroke
- **Error recovery**: Show hints after N attempts
- **Auto-save**: Save to localStorage between tabs
- **Async validation**: Backend email uniqueness check
- **Dynamic field visibility**: Show fields based on previous selections
- **Multi-step progress**: Show visual progress indicator

### **Algorithm/DS Questions Related to Forms**
- **Validate nested form objects**: DFS/recursion approach
- **Error accumulation**: HashMap for O(1) error lookup
- **Tab ordering**: Linked list vs array for extensibility
- **Interest selection (large dataset)**: Set for O(1) includes() vs Array

### **React-Specific Interview Q&A**
**Q: Why not directly mutate state?**
- React compares old & new object references
- Mutation keeps same reference → React skips re-render
- Solution: Always create new objects/arrays

**Q: When would you use refs instead of state?**
- Managing focus, text selection, triggering animations
- Not for form data (use controlled components)

**Q: Difference between props and state?**
- Props: Read-only data from parent
- State: Component's own data, can change
- This form: `data` lives in parent → passed as props

**Q: How to optimize re-renders?**
- `React.memo()` for child components
- `useCallback()` for handler functions
- `useMemo()` for computed values
