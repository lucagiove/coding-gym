import {TextEditorCommander} from "./text-editor-commander";

describe('Simple Text Editor', () => {
    describe('Given a Commander and the input [\'1 fg\', \'3 6\', \'2 5\', \'4\', \'3 7\', \'4\', \'3 4\']', () => {
        let commander: TextEditorCommander;
        const commands = ['1 abcde', '1 fg', '3 6', '2 5', '4', '3 7', '4', '3 4']
        beforeEach(() => {
            commander = new TextEditorCommander()
        });

        describe('When processing the commands', () => {
            it('should return f g d', () => {
                const printedValues = commander.processCommands(commands)
                expect(printedValues).toEqual(['f', 'g', 'd']);
            });
        })
    })

    describe('Given a Commander and the input [\'1 fg\', \'3 6\', \'2 5\', \'4\', \'3 7\', \'4\', \'3 4\']', () => {
        let commander: TextEditorCommander;
        const commands = ['1 abc', '3 3', '2 3', '1 xy', '3 2', '4', '4', '3 1']
        beforeEach(() => {
            commander = new TextEditorCommander()
        });

        describe('When processing the commands', () => {
            it('should return c y a', () => {
                const printedValues = commander.processCommands(commands)
                expect(printedValues).toEqual(['c', 'y', 'a']);
            });
        })
    })
})