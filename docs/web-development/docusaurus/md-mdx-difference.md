---
title: Difference between md and mdx files
---



---

### 📄 `.md` — Markdown File

| Feature          | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| **Full form**    | Markdown                                                       |
| **Purpose**      | Writing formatted documents using plain text syntax            |
| **Content type** | **Only Markdown** (text, headings, code, lists, images, links) |
| **Limitations**  | Cannot use JavaScript or React components inside               |
| **Used in**      | Documentation, README files, blogs, static content             |
| **Tools**        | GitHub, Jekyll, Hugo, Docusaurus, VS Code, etc.                |
| **Example**      |                                                                |

```md
# Hello
This is a **Markdown** file.
```

---

### ⚛️ `.mdx` — Markdown + JSX

| Feature          | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| **Full form**    | Markdown + JSX                                                                              |
| **Purpose**      | Markdown **with the power of React** components                                             |
| **Content type** | Markdown **+ embedded React code**                                                          |
| **Used in**      | Interactive documentation, React-based apps/sites like **Docusaurus v2**, **Next.js**, etc. |
| **Tools**        | MDX bundlers, Docusaurus, Next.js, Gatsby, etc.                                             |
| **Example**      |                                                                                             |

```mdx
# Hello

This is a **MDX** file.

<CustomComponent name="Sai Krishna" />

<Chart data={myData} />
```

---

### ✅ Summary Table

| Feature          | `.md`             | `.mdx`                                    |
| ---------------- | ----------------- | ----------------------------------------- |
| Markdown Support | ✅ Yes             | ✅ Yes                                     |
| React Components | ❌ No              | ✅ Yes (can embed JSX)                     |
| Use Case         | Static content    | Interactive content, component embedding  |
| Syntax           | Plain Markdown    | Markdown + JSX                            |
| Tools            | Any markdown tool | Requires bundler like Webpack, Vite, etc. |

---

### 💡 When to Use Which?

* Use `.md` when:
  You just want to write simple static content like documentation, blog posts, etc., without any dynamic or React content.

* Use `.mdx` when:
  You want to **embed React components**, interactive elements, or dynamic content alongside Markdown (common in modern documentation sites).

---

