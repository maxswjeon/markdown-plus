# Markdown Plus
Markdown Parser by Codingbear (Jeon Sangwan <maxswjeon@naver.com>)

## How it works
### 1. Set up MarkdownParser
```typescript
const parser = new MarkdownParser();
```

####Using Plugins
```typescript
const parser = new MarkdownParser()
                   .use(new PluginParser());
```

### 2. Parse Markdown
```typescript
const result = parser.parse("# h1 heading!");
```
Parser parses markdown file / string into Array of tokens, typed `ParseResult`.

### 3. Render Markdown
```typescript
const renderer = new HTMLRenderer();
const html = renderer.render(result);
```

