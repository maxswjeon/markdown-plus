# Features
    
## Markdown Basics
- [x] Markdown Basics  
    - [x] Headers
    - [x] Emphasis
    - [x] Lists
        - [x] Unordered List
        - [x] Ordered List
    - [x] Images
    - [x] Links
    - [x] Blockquote
    - [x] Horizontal Rule
    - [x] Inline code
    - [x] Code block

These Markdown specs are specified in CommonMark. 
These Markdown specs are handled by `markdown-it`.

## Extended Markdown Basics
- [x] Extended Markdown Basics
    - [x] Tables
    - [x] Strikethrough

These Extended Markdown Basics are also known as GFM, and it is handled by `markdown-it`.

## MUME Specific Markdown Specs
### Markdown Basics
- [ ] Mume Specific Markdown Basics
    - [ ] `id` and `class` css selector support for headers
    - [ ] `class` css selector for code blocks
    - [ ] Code block line numbers
    - [ ] Code block highlighting rows
    - [ ] Task Lists
    - [ ] Table colspan with `>`, rowspan with `^`
    - [ ] Emoji
    - [ ] Font-Awesome
    - [ ] Superscript
    - [ ] Subscript
    - [ ] Footnotes
    - [ ] Abbreviation
    - [ ] Mark
    - [ ] CriticMarkup

Tasks Lists can be implemented with markdown-it plugin [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists)

### Math
- [ ] Math
    - [ ] LaTeX Support with [MathJax](https://www.mathjax.org/)

### Diagrams
- [ ] Diagrams
    - [ ] Flowchart support with [flowchart.js](https://flowchart.js.org/)
    - [ ] [Mermaid](https://github.com/knsv/mermaid) Library
    - [ ] Digital Timing diagram with [WaveDrom](https://wavedrom.com/)

Sequence Diagrams with [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) will not be implemented, 
since [mermaid](https://github.com/knsv/mermaid) supports more powerful sequence diagram rendering.  

### Table of Contents
- [ ] Table of Contents Generation

### Others
- [ ] Circuit Schematics with TikZ