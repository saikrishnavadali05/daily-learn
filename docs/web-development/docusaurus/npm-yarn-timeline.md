---
title: Comparitive Timeline of npm & yarn
---

### 📜 Background: npm First

* **npm (Node Package Manager)** was introduced in **2010**, alongside Node.js.
* It quickly became the **default** package manager for all JavaScript and Node.js projects.
* But over time, developers started noticing problems with npm:

  * **Slow installs**
  * **Inconsistent installs** across machines
  * **Security issues**
  * Lack of features like offline caching

---

### 🧶 Then Came Yarn (2016)

* **Yarn** was launched by **Facebook** in **October 2016**.
* It was created **as an alternative to npm** to solve its major problems.

### 🆚 Why Did Yarn Become Popular?

| Problem with npm (before 2016) | How Yarn Solved It                    |
| ------------------------------ | ------------------------------------- |
| Slow installs                  | Yarn introduced **better caching**    |
| Inconsistent versions          | Yarn introduced **`yarn.lock`**       |
| No offline install             | Yarn allowed **offline installation** |
| Non-deterministic builds       | Yarn made installs **deterministic**  |
| Poor output messages           | Yarn gave **cleaner CLI output**      |

---

### 📈 Popularity Trend

* Between **2016–2019**, Yarn became very popular — many big projects (like Docusaurus, React Native, Gatsby) started using it by default.
* In response, **npm improved a lot** — adding `package-lock.json`, faster installs, and audit tools.

---

### 🔄 Now (as of 2025)

| Feature                        | npm (v9+)           | Yarn (v3+)              |
| ------------------------------ | ------------------- | ----------------------- |
| Lock file                      | `package-lock.json` | `yarn.lock`             |
| Offline cache                  | ✅                   | ✅                       |
| Workspaces                     | ✅ (recently)        | ✅ (earlier)             |
| Plug'n'Play (no node\_modules) | ❌                   | ✅ (Yarn feature)        |
| Speed                          | Much improved       | Still fast              |
| Used in Docusaurus Docs        | ✅ (npm) & ✅ (Yarn)  | ✅ Preferred in examples |

---

### ✅ Summary

* **npm** came first (2010).
* **Yarn** was launched later (2016) to solve npm’s early problems.
* Today, both are **equally powerful** and it's a **matter of preference**.

🔁 You should **not mix** both in one project — choose either `npm` or `yarn`.

Let me know if you want help deciding which one to use or converting from one to the other.
