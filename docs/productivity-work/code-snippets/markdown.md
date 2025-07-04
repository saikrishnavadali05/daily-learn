---
title: VS Code Snippets for Markdown files
---

Absolutely! Custom **VS Code snippets** can dramatically speed up your workflow when writing Markdown. Below is a curated list of **useful Markdown snippets**, along with how to set them up in VS Code.

---

# 🧩 Custom VS Code Snippets for Markdown Files

## 🔧 How to Add Snippets

1. Open Command Palette → `Ctrl + Shift + P` (`Cmd + Shift + P` on Mac)
2. Type: `Preferences: Configure User Snippets`
3. Select: `markdown.json`
4. Paste the following snippet definitions.

---

## ✍️ Snippet Examples

````json
{
  "Header 1": {
    "prefix": "h1",
    "body": ["# ${1:Heading 1}"],
    "description": "Insert H1 heading"
  },
  "Header 2": {
    "prefix": "h2",
    "body": ["## ${1:Heading 2}"],
    "description": "Insert H2 heading"
  },
  "Bold Text": {
    "prefix": "bold",
    "body": ["**${1:bold text}**"],
    "description": "Insert bold text"
  },
  "Italic Text": {
    "prefix": "italic",
    "body": ["*${1:italic text}*"],
    "description": "Insert italic text"
  },
  "Link": {
    "prefix": "link",
    "body": ["[${1:link text}](${2:https://example.com})"],
    "description": "Insert a link"
  },
  "Image": {
    "prefix": "img",
    "body": ["![${1:alt text}](${2:image-url})"],
    "description": "Insert an image"
  },
  "Code Block": {
    "prefix": "codeblock",
    "body": [
      "```${1:language}",
      "${2:code goes here}",
      "```"
    ],
    "description": "Insert a code block"
  },
  "Table": {
    "prefix": "table",
    "body": [
      "| ${1:Header 1} | ${2:Header 2} |",
      "|-------------|-------------|",
      "| ${3:Row 1 Col 1} | ${4:Row 1 Col 2} |",
      "| ${5:Row 2 Col 1} | ${6:Row 2 Col 2} |"
    ],
    "description": "Insert a Markdown table"
  },
  "Checklist": {
    "prefix": "todo",
    "body": [
      "- [ ] ${1:First task}",
      "- [ ] ${2:Second task}"
    ],
    "description": "Insert a task list"
  },
  "Blockquote": {
    "prefix": "quote",
    "body": ["> ${1:Quoted text}"],
    "description": "Insert blockquote"
  }
}
````

---

## 🧠 Usage Tip

* Type the prefix (like `h1`, `bold`, `todo`) and press `Tab`.
* `$1`, `$2` etc., are **tab stops** — you can jump between them using `Tab`.

---

Would you like:

* A **ready-to-import file** for snippets?
* Additional snippets (like callouts, TOC placeholders)?
* Snippets tailored to **blog writing**, **documentation**, or **academic papers**?

Let me know how deep you’d like to go!
