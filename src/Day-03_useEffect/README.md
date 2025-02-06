# 🚀 Day 3: Mastering the `useEffect` Hook

## 📌 What You Will Learn Today

Today, we dive into one of the most important hooks in React: **`useEffect`**.  
You will learn:

- What `useEffect` is and why it's important.
- How to use it to handle **side effects** like fetching data, setting intervals, and updating the DOM.
- The different ways `useEffect` behaves based on **dependencies**.
- The importance of **cleanup functions** to prevent memory leaks.

## 🔹 Summary of Key Concepts

✅ `useEffect` is used for **performing side effects** in functional components.  
✅ It can be used to **fetch data, manage event listeners, and update the DOM**.  
✅ The dependency array `[]` controls when the effect runs:

- **No dependencies** → Runs after every render.
- **Empty array `[]`** → Runs **only once** (on mount).
- **State/props in array `[state]`** → Runs when the state/prop changes.
  ✅ **Cleanup functions** prevent memory leaks (e.g., clearing intervals, removing event listeners).

## 🛠 Project: Timer App

You will build a **real-time clock** that updates every second and stops when unmounted.  
This will help you understand:

- How to use `useEffect` for **side effects**.
- How to clean up effects **before a component unmounts**.

---

## 🚀 What’s Next?

Tomorrow, we will explore **Props & Prop Drilling**, where you’ll learn how to pass data between components efficiently!
