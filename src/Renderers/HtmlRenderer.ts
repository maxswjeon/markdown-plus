import MarkdownRenderer from "../MarkdownRenderer";
import {ParseResult} from "../MarkdownParser";

export default class HtmlRenderer extends MarkdownRenderer {
    render(result: ParseResult): string {
        return "";
    }
}
