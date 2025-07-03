---
title: node modules folder in docusaurus and other react websites
---

The `node_modules` folder in **Docusaurus** and **React** (or any **Node.js-based** project) is a **special folder** where all the **dependencies** required by the project are stored.

---

### 🧠 What is `node_modules`?

* It's **automatically created** when you run:

  ```bash
  npm install
  ```

  or

  ```bash
  yarn install
  ```

* It contains **JavaScript packages** that your project needs to run — both directly (like React, Docusaurus) and indirectly (dependencies of those packages).

---

### 📦 Example in a Docusaurus Project

If your `package.json` looks like:

```json
{
  "dependencies": {
    "@docusaurus/core": "^3.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

Then `node_modules` will include:

```
node_modules/
├── @docusaurus/
├── react/
├── react-dom/
├── many other internal packages
```

These can total **hundreds of folders**, because each dependency can have its **own dependencies**.

---

### 💡 Why Do We Need It?

* It allows your app (like a React site or Docusaurus blog) to **import and use third-party code**.
* Without `node_modules`, your project will **not run or build** — you'll get module not found errors.

---

### 📁 Should You Touch It?

* **No**, never modify files in `node_modules` directly.
* It's a **temporary folder**, completely **rebuildable** by running `npm install` again.

---

### 🧹 Can It Be Deleted?

Yes. You can safely delete it and re-create it with:

```bash
rm -rf node_modules
npm install
```

---

### 📦 Is It Included in Git?

No. You should **never push `node_modules` to Git**. It’s usually listed in `.gitignore`.

---

### ✅ Summary

| Feature             | Explanation                             |
| ------------------- | --------------------------------------- |
| Purpose             | Stores all the project's dependencies   |
| Created by          | `npm install` or `yarn install`         |
| Safe to delete      | ✅ Yes (can be reinstalled)              |
| Included in Git?    | ❌ No (usually ignored via `.gitignore`) |
| Should you edit it? | ❌ Never edit manually                   |

Let me know if you want to dive into how dependency resolution works or how `package-lock.json` relates to `node_modules`.
