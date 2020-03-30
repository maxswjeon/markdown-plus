import MarkdownRule from "../Rules/MarkdownRule";

export default abstract class MarkdownPlugin {
    public abstract rules: Array<MarkdownRule>;
}