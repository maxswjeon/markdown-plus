import MarkdownRenderer from "./MarkdownRenderer";
import ParseResult from "../ParseResult";

export default class HtmlRenderer extends MarkdownRenderer {
    render(result: ParseResult): string {
        return "";
    }
}