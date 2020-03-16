import MarkdownIt from "markdown-it";

export default class Markdown {
    private markdown: MarkdownIt;

    private constructor() {
        this.markdown = new MarkdownIt();
    }

    static fromText(text: string): Markdown {
        const markdown = new Markdown();

        return markdown;
    }

    static fromFile(path: string): Markdown {
        const markdown = new Markdown();

        return markdown;
    }
}