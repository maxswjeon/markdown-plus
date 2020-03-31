import chai from 'chai';
import Markdown from "../src/Markdown";

describe('Markdown', function () {
    describe('.fromString', function () {
        it('Should return valid Markdown Object', function () {
            const md = Markdown.fromString('# Valid Markdown');
            chai.expect(md, 'test');
        });
    });
});
