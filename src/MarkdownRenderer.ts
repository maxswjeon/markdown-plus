import ParseResult from './MarkdownParser'

export default abstract class MarkdownRenderer {
    abstract render(result: ParseResult): string;
}
