import {TextEditorCommander} from "./text-editor-commander";

describe('TextEditorCommander', () => {
    describe('Given a TextEditorCommander', () => {
        let commander: TextEditorCommander;

        beforeEach(() => {
            commander = new TextEditorCommander()
        });

        describe('And Given a list of append/delete commands', () => {
            describe('When processing one by one the command', () => {
                let commands = ['1 abcde', '1 fg', '2 3', '1 uvz'];
                beforeEach(() => {
                    commander.processCommand(commands[0]);
                    commander.processCommand(commands[1]);
                    commander.processCommand(commands[2]);
                    commander.processCommand(commands[3]);
                });

                it('should add them in an internal command history', () => {
                    expect(commander.commandsHistory).toEqual(commands);
                });

                describe('When print a value', () => {
                    it('should apply all the commands, build the abcduvz value and return u', () => {
                        expect(commander.processCommand('3 5')).toEqual('u');
                    });
                });

                describe('When undo', () => {
                    it('should remove the latest change command from the history', () => {
                        commander.processCommand('4');
                        expect(commander.commandsHistory).toEqual(['1 abcde', '1 fg', '2 3']);
                    });
                });
            });
        });
    });
});

