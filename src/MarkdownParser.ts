import MarkdownPlugin from "./Plugins/MarkdownPlugin";
import MarkdownRule from "./Rules/MarkdownRule";
import Markdown from "./Markdown";
import ParseResult from "./ParseResult";

export default class MarkdownParser {

    public rules: Map<string, Array<MarkdownRule>>;

    constructor() {
        this.rules = new Map<string, Array<MarkdownRule>>();
    }

    use(plugin: MarkdownPlugin): MarkdownParser {
        for (const rule of plugin.rules) {
            let ruleset = this.rules.get(rule.group);
            if (ruleset == undefined) {
                ruleset = new Array<MarkdownRule>();
                this.rules.set(rule.group, ruleset);
            }
            ruleset.push(rule);
        }
        return this;
    }

    parse(markdown: Markdown): ParseResult {
        return new ParseResult();
    }
}