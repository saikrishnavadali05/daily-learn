---
title : Why does React need a database
---

> ❓ **Why does React need a database, if it can store some data?**

### 👉 Short Answer:

React **doesn't *need* a database by itself**, but **real-world apps need data**, and that’s where a **backend + database** comes in.

---

### 📦 React = Frontend Only

React is:

* A **JavaScript library** for building **user interfaces**
* It runs **in the browser**
* It doesn’t store or manage **permanent data**

React can:

* Collect input from users
* Display data on the screen
* Temporarily store data in the browser (using `useState`, `useEffect`, etc.)

❌ But once you refresh the page, this data is **gone**, unless it’s stored somewhere permanent.

---

### 💽 Where Does the Permanent Data Go?

A **backend** system (like Django, Node.js, etc.) + a **database** (like PostgreSQL, MySQL, MongoDB) is needed to:

| Purpose                  | Example                               |
| ------------------------ | ------------------------------------- |
| 📝 Save user inputs      | Contact form data, blog posts, orders |
| 🔐 Handle authentication | Login, sessions, user info            |
| 📊 Fetch content         | Display products, comments, tasks     |
| 🔁 Update stored data    | Change profile info, update cart      |
| ❌ Delete data            | Remove items, delete account          |

---

### 🔄 Example Flow: React + Django + PostgreSQL

```mermaid
graph LR
A[React UI] --> B[Calls API]
B --> C[Django Backend]
C --> D[Database (PostgreSQL)]
D --> C
C --> A
```

1. User fills form in React
2. React sends data to Django API
3. Django stores data in PostgreSQL
4. Later, React fetches that data again via the API

---

### 🔍 So Why Use React Then?

Because it makes the **frontend dynamic and snappy**, unlike Django templates that reload the page every time.

But for real data (like storing messages, user settings, etc.), you still need:

* A **backend** (Django, Node.js, etc.)
* A **database** (MySQL, MongoDB, etc.)

---

### 🛠️ Want to Try a React-Only App?

You *can* build small apps without a backend using:

* `localStorage` or `sessionStorage`
* In-browser state (via React)
* Firebase (for quick backendless setups)

But for scalable, real-world apps: **React is the UI + needs a backend to store/manage data**.

---

Would you like a hands-on example or mini project that shows React talking to Django + database?
