---
title: What is NPX and how is it different from NPM?
---
### 🧰 What is `npm`?

* **npm** = **Node Package Manager**
* It’s used to:

  * Install packages: `npm install react`
  * Manage dependencies in `package.json`
  * Run scripts: `npm run start`
* **Stores packages in `node_modules/`**

---

### ⚡ What is `npx`?

* **npx** = **Node Package eXecute**
* It's used to:

  * **Run packages without installing them permanently**
  * Execute commands from packages **directly** from the internet or your local environment

---

### 🚀 Example Difference

#### ✅ Using `npm`

```bash
npm install create-react-app
npx create-react-app my-app
```

* You **install** `create-react-app` first with `npm`
* Then run it using `npx` (or manually from `node_modules/.bin`)

#### ✅ Using only `npx`

```bash
npx create-react-app my-app
```

* This downloads and runs `create-react-app` **on the fly**
* You don’t need to install it globally or keep it in your system

---

### 🔍 Key Differences: `npx` vs `npm`

| Feature                     | `npm`                         | `npx`                             |
| --------------------------- | ----------------------------- | --------------------------------- |
| Purpose                     | Installs and manages packages | Executes package binaries/scripts |
| Requires permanent install? | ✅ Yes                         | ❌ No (runs temporarily)           |
| Installs to `node_modules`? | ✅ Yes                         | ❌ No (unless you tell it to)      |
| Good for running CLI tools? | ❌ Not directly                | ✅ Yes                             |
| Comes bundled with Node.js? | ✅ Yes                         | ✅ Yes (from npm v5.2+)            |
| Typical Use                 | Project dependencies          | One-time CLI commands             |

---

### 🧪 Common Use Cases of `npx`

| Task                                   | Command                                        |
| -------------------------------------- | ---------------------------------------------- |
| Create a new React app                 | `npx create-react-app my-app`                  |
| Start a Docusaurus site                | `npx create-docusaurus@latest my-site classic` |
| Run ESLint without installing globally | `npx eslint yourfile.js`                       |
| Run a GitHub Gist                      | `npx gist-runner <gist-url>`                   |

---

### 💡 Summary

* **Use `npm`** to **install and manage packages**.
* **Use `npx`** to **run packages/scripts temporarily** without installing them.

Let me know if you want a real example using Docusaurus or React to see this difference in action!
