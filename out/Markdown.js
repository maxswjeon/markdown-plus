"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
var fs_1 = __importDefault(require("fs"));
var Markers_1 = __importDefault(require("./Markers"));
var Markdown = /** @class */ (function () {
    function Markdown(src) {
        src = this.normalize(src);
        src = this.escape(src);
        this.src = src;
        this.markers = new Markers_1.default();
        this.preParse();
    }

    Markdown.fromFile = function (path, encoding) {
        if (encoding === void 0) {
            encoding = 'utf-8';
        }
        var src = fs_1.default.readFileSync(path, encoding);
        var md = new Markdown(src);
        return md;
    };
    Markdown.fromString = function (src) {
        var md = new Markdown(src);
        return md;
    };
    Markdown.prototype.getLine = function (index) {
        if (index >= this.markers.line_begin.length) {
            return null;
        }
        return this.src.slice(this.markers.line_begin[index], this.markers.line_end[index]);
    };
    Markdown.prototype.skipEmptyLines = function (index) {
        if (index >= this.markers.line_begin.length) {
            return -1;
        }
        for (; index < this.markers.count; index++) {
            if (this.markers.line_begin[index] + this.markers.offset[index] < this.markers.line_end[index]) {
                break;
            }
        }
        return index;
    };
    Markdown.prototype.normalize = function (src) {
        return src.replace(/\\n?|\n/g, '\n');
    };
    Markdown.prototype.escape = function (src) {
        return src.replace(/\u0000/g, '\uFFFD');
    };
    Markdown.prototype.preParse = function () {
        var content_start = false;
        var offset = 0;
        var offset_expanded = 0;
        var start = 0;
        var length = this.src.length;
        for (var pos = 0; pos < length; ++pos) {
            var char = this.src.charAt(pos);
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
    };
    return Markdown;
}());
exports.default = Markdown;
