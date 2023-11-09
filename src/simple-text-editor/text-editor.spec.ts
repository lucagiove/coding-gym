import {TextEditor} from "./text-editor";

describe('Text Editor', () => {
    let editor: TextEditor;
    beforeEach(() => {
        editor = new TextEditor('abcde');
    });

    describe('constructor', () => {
        it('should have abcde as value', () => {
            expect(editor.value).toBe('abcde');
        });
    });

    describe('append', () => {
        it('should have abcdef as value', () => {
            editor.append('f');
            expect(editor.value).toBe('abcdef');
        });
    });

    describe('delete', () => {
        it('should have abc as value', () => {
            editor.delete(3);
            expect(editor.value).toBe('ab');
        });
        it('should have abc as value', () => {
            editor.delete(5);
            expect(editor.value).toBe('');
        });
    });

    describe('print', () => {
        it('should return c with 3 as input', () => {
            expect(editor.print(3)).toBe('c');
        });
    });
});