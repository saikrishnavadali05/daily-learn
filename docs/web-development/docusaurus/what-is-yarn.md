---
title: What is Yarn in Docusaurus
---
### 🧶 What is Yarn?

**Yarn** is a **package manager**, like **npm** (Node Package Manager). It helps you:

* Download and install **JavaScript dependencies** (like React, Docusaurus core libraries, etc.)
* Manage **versions** of packages
* Run project-related scripts (e.g., `start`, `build`, `deploy`)

---

### 📌 Yarn in Docusaurus

When using **Docusaurus**, you can choose between:

| Package Manager | Command Examples             |
| --------------- | ---------------------------- |
| **npm**         | `npm install`, `npm start`   |
| **yarn**        | `yarn install`, `yarn start` |

Docusaurus officially supports **both**, but many developers prefer **Yarn** because it is:

* **Faster** than npm (especially older versions of npm)
* Has **deterministic installs** using `yarn.lock` (ensures consistent versions)
* Better caching

---

### 💡 When You See Yarn in Docusaurus Docs

If the documentation says:

```bash
yarn create docusaurus@latest my-website classic
```

It’s using Yarn to:

1. **Create** a new Docusaurus project
2. Automatically **install** all required packages
3. Set up the basic structure

---

### ✅ Common Yarn Commands in a Docusaurus Project

| Task                 | Yarn Command         | What It Does                        |
| -------------------- | -------------------- | ----------------------------------- |
| Install dependencies | `yarn install`       | Downloads all required packages     |
| Start dev server     | `yarn start`         | Launches local site with hot reload |
| Build static site    | `yarn build`         | Compiles everything into `/build`   |
| Deploy               | `yarn deploy`        | Deploys to GitHub Pages (if set up) |
| Add package          | `yarn add <package>` | Installs a new dependency           |

---

### 🆚 Yarn vs npm in Docusaurus

| Feature         | Yarn                     | npm                         |
| --------------- | ------------------------ | --------------------------- |
| Lock file       | `yarn.lock`              | `package-lock.json`         |
| Performance     | Often faster             | Slightly slower (older npm) |
| Usage           | `yarn <cmd>`             | `npm <cmd>`                 |
| Default in Docs | Yarn (but both are fine) | Supported fully             |

---

### 📦 Summary

* **Yarn is just a tool** to manage packages in a Docusaurus project.
* It helps run commands like `start`, `build`, `deploy`, and manage dependencies.
* Docusaurus supports both `yarn` and `npm`. Choose one and stick to it per project.

Let me know if you want help switching from npm to yarn or want to explore `yarn.lock` vs `package-lock.json`.
