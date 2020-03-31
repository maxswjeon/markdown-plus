import Markdown from "./Markdown";

export class RuleResult {
    result: boolean;
    line_index: number;

    constructor(result: boolean, line_index: number = -1) {
        this.result = result;
        this.line_index = line_index;

        if (!result && line_index == -1) {
            throw new Error('Valid line index must be given with result value `true`');
        }
    }
}

export default abstract class MarkdownRule {
    abstract group: string;

    abstract apply(markdown: Markdown, line_index: number): RuleResult;
}
