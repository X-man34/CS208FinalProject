# Image Inclusion in MD

# User

how to include image in md

---

# Assistant

Use standard Markdown image syntax:

Markdown

!\[alt text\](path-or-url)

Examples:

Markdown

!\[Logo\](images/logo.png)

Markdown

!\[Cat\](https://example.com/cat.jpg)

For a clickable image:

Markdown

\[!\[Alt text\](image.png)\](https://example.com)

Notes:

-   `alt text` is the description shown if the image does not load, and helps accessibility.

-   The path can be relative like `./img/pic.png` or absolute.

-   Plain Markdown does not control image size. If your renderer allows HTML, use:


HTML

<img src\="image.png" alt\="Alt text" width\="300"\>

If you want, I can also show the exact syntax for GitHub README, Obsidian, or Markdown in VS Code.
