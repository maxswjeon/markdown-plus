import MarkdownRule, {RuleResult} from "../MarkdownRule";
import Markdown from "../Markdown";

export default class TableRule extends MarkdownRule {
    group: string;

    constructor() {
        super();
        this.group = 'block';
    }

    apply(markdown: Markdown, line_index: number): RuleResult {
        return new RuleResult(false);
    }

}
