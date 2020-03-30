const assert = require('assert');
const Markdown = require('../out/src/Markdown');

describe('Markdown', function () {
    describe('#constructor', function () {
        it('Should throw error', function () {
            assert.throws(() => new Markdown('# Valid Markdown'), TypeError, '');
        });
    });
    describe('.fromString', function () {
        it('Should return valid Markdown Object', function () {
            const md = Markdown.fromString('# Valid Markdown');
            assert.ok(md, 'test');
        });
    });
});