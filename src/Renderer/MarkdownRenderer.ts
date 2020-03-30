import ParseResult from "../ParseResult";

export default abstract class MarkdownRenderer {
    abstract render(result: ParseResult): string;
}