---
title: Getting started with Docusaurus
---


### different between npm start and npm serve?

The difference between `npm start` and `npm serve` lies in **how they are defined in your project** and **what scripts you assign to them** in the `package.json` file.

---

### 🔹 `npm start`

* **Default script** provided by `npm`.
* It runs the `start` script defined in your `package.json`.

```json
"scripts": {
  "start": "node app.js"
}
```

* You can run it simply as:

```bash
npm start
```

* If no `start` script is defined, it defaults to:

```bash
node server.js
```

---

### 🔹 `npm serve`

* **Not a default script** — it only works **if you define it** in your `package.json`.
* Commonly used if you want to run a lightweight server using a tool like `serve`.

Example:

```json
"scripts": {
  "serve": "serve -s build"
}
```

* To run it:

```bash
npm run serve
```

---

### ✅ Summary Table

| Feature       | `npm start`                  | `npm serve`                                                    |
| ------------- | ---------------------------- | -------------------------------------------------------------- |
| Built-in?     | ✅ Yes                        | ❌ No (you define it)                                           |
| Shortcut?     | ✅ `npm start`                | ❌ Must use `npm run serve`                                     |
| Typical Usage | Start app (dev server, prod) | Serve static files or production build                         |
| Common Tool   | Node.js, Webpack dev server  | `serve` (from [vercel/serve](https://github.com/vercel/serve)) |

---

### 🔧 Example Use Case

React projects:

* Development:

  ```json
  "start": "react-scripts start"
  ```
* Production:

  ```json
  "serve": "serve -s build"
  ```

So in dev, you'd use `npm start`, and in production you'd use `npm run serve`.

---

Let me know your exact tech stack (e.g., React, Vue, Docusaurus, etc.) if you want more tailored advice!

user : Docusaurus

Great! Since you're using **Docusaurus**, here's how `npm start` vs `npm run serve` work specifically in that context:

---

### 🔹 `npm start` in Docusaurus

* Runs the **development server**.
* Watches for changes in your files and **hot reloads** the browser.
* Typically defined in `package.json` like this:

```json
"scripts": {
  "start": "docusaurus start"
}
```

* Use this when **actively developing** the site.

```bash
npm start
```

---

### 🔹 `npm run serve` in Docusaurus

* Serves the **static, production-ready site** from the `build/` folder.
* You must **build** the site first using:

```bash
npm run build
```

* Then serve it:

```bash
npm run serve
```

* Usually defined like this:

```json
"scripts": {
  "serve": "docusaurus serve"
}
```

---

### ✅ Summary Table (Docusaurus Context)

| Command         | Purpose                 | Needs Build? | Hot Reloading? | When to Use               |
| --------------- | ----------------------- | ------------ | -------------- | ------------------------- |
| `npm start`     | Development server      | ❌ No         | ✅ Yes          | While building or editing |
| `npm run serve` | Serve built static site | ✅ Yes        | ❌ No           | To preview final output   |

---

### 🛠️ Typical Workflow

```bash
# 1. Start local dev server
npm start

# 2. Build static site for production
npm run build

# 3. Serve the static build locally
npm run serve
```

Let me know if you want help automating this or deploying your Docusaurus site (e.g., to GitHub Pages or Vercel)!
