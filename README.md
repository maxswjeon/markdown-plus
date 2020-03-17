# Markdown Plus
Markdown Parser by Codingbear (Jeon Sangwan <maxswjeon@naver.com>)

## How it works
### 1. Read File or Start from given string
```typescript
const markdown = Markdown.fromFile('./tests/1.md');
```
```typescript
const markdown = Markdown.fromText('# h1 heading');
```
### 2. Set up MarkdownParser
```typescript
const parser = new MarkdownParser();
```

####Using Plugins
```typescript
const parser = new MarkdownParser()
                   .use(new PluginParser());
```

### 3. Parse Markdown
```typescript
const result = parser.parse(markdown);
```
Parser parses markdown file / string into Array of tokens, typed `ParseResult`.

### 4. Render Markdown
```typescript
const renderer = new HTMLRenderer();
const html = renderer.render(result);
```

