import MarkdownRule from "./MarkdownRule";

export default abstract class MarkdownPlugin {
    rules: Array<MarkdownRule>;

    protected constructor() {
        this.rules = new Array<MarkdownRule>();
    }
}
