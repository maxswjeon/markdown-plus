export default class Markers {
    public line_begin: Array<number>;
    public line_end: Array<number>;
    public offset: Array<number>;
    public offset_expanded: Array<number>;
    public count: number;

    constructor() {
        this.line_begin = new Array<number>();
        this.line_end = new Array<number>();
        this.offset = new Array<number>();
        this.offset_expanded = new Array<number>();
        this.count = 0;
    }

}