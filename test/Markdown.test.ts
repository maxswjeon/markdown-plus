import chai from 'chai';
import Markdown from "../src/Markdown";

describe('Markdown', function () {
    describe('#constructor', function () {
        it('Should throw error', function () {
            chai.assert.throw(() => new Markdown('# Valid Markdown'));
        });
    });
    describe('.fromString', function () {
        it('Should return valid Markdown Object', function () {
            const md = Markdown.fromString('# Valid Markdown');
            chai.expect(md, 'test').ok();
        });
    });
});