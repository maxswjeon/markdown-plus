import MarkdownPlugin from "./MarkdownPlugin";
import MarkdownRule from "./MarkdownRule";
import Markdown from "./Markdown";

export default class MarkdownParser {

    public rules: ParserRules;

    public constructor() {
        this.rules = new ParserRules();
    }

    public use(plugin: MarkdownPlugin): MarkdownParser {
        for (const rule of plugin.rules) {
            if (rule.group === 'block') {
                this.rules.block.push(rule);
            } else if (rule.group === 'inline') {
                this.rules.inline.push(rule);
            } else {
                throw new Error('Unknown Rule Group "' + rule.group + '" for MarkdownParser.\n' +
                    'Valid Groups are "block" and "inline"');
            }
        }
        return this;
    }

    public parse(markdown: Markdown): ParseResult {
        let line_index = markdown.skipEmptyLines(0);
        const line_count = markdown.markers.count;

        while (line_index < line_count) {
            const line = markdown.getLine(line_index);

            for (const rule of this.rules.block) {
                const result = rule.apply(markdown, line_index);
                if (result) {
                    line_index = result.line_index;
                }
            }

            line_index = markdown.skipEmptyLines(line_index);
        }

        return new ParseResult();
    }

    private registerDefaultRules() {
        //Block Rules

        //Inline Rules
    }
}

export class ParseResult {

}

// Internal class ParserRules
class ParserRules {
    public block: Array<MarkdownRule>;
    public inline: Array<MarkdownRule>;

    constructor() {
        this.block = new Array<MarkdownRule>();
        this.inline = new Array<MarkdownRule>();
    }
}
