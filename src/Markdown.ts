import fs from 'fs';
import Markers from "./Markers";

export default class Markdown {

    public src: string;
    public markers: Markers;

    private constructor(src: string) {
        src = this.normalize(src);
        src = this.escape(src);
        this.src = src;

        this.markers = new Markers();
        this.preParse();
    }

    static fromFile(path: fs.PathLike, encoding: string = 'utf-8'): Markdown {
        const src = fs.readFileSync(path, encoding);

        const md = new Markdown(src);
        return md;
    }

    static fromString(src: string): Markdown {
        const md = new Markdown(src);
        return md;
    }

    getLine(index: number): string | null {
        if (index >= this.markers.line_begin.length) {
            return null;
        }
        return this.src.slice(this.markers.line_begin[index], this.markers.line_end[index]);
    }

    skipEmptyLines(index: number): number {
        if (index >= this.markers.line_begin.length) {
            return -1;
        }

        for (; index < this.markers.count; index++) {
            if (this.markers.line_begin[index] + this.markers.offset[index] < this.markers.line_end[index]) {
                break;
            }
        }

        return index;
    }

    private normalize(src: string): string {
        return src.replace(/\\n?|\n/g, '\n');
    }

    private escape(src: string): string {
        return src.replace(/\u0000/g, '\uFFFD');
    }

    private preParse() {
        let content_start = false;
        let offset = 0;
        let offset_expanded = 0;
        let start = 0;

        const length = this.src.length;

        for (let pos = 0; pos < length; ++pos) {
            const char = this.src.charAt(pos);

            if (!content_start) {
                if (char === '\t') {
                    offset++;
                    offset_expanded += 4;
                    continue;
                }

                if (char === ' ') {
                    offset++;
                    offset_expanded++;
                    continue;
                }

                content_start = true;
            }

            if (char === '\n' || pos === length - 1) {
                this.markers.line_begin.push(start);
                this.markers.line_end.push(pos);
                this.markers.offset.push(offset);
                this.markers.offset_expanded.push(offset_expanded);

                content_start = false;
                offset = 0;
                offset_expanded = 0;
                start = pos + 1;
            }
        }
        this.markers.count = this.markers.line_begin.length;
    }

}