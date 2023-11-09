import { TextEditor } from "./text-editor";

enum Operation {
    append = '1',
    delete = '2',
    print = '3',
    undo = '4'
}

export class TextEditorCommander {
    public commandsHistory: string[] = [];

    public processCommands(commands: string[]): string[] {
        const printedValues: string[] = [];
        commands.forEach(command => {
            const printedValue = this.processCommand(command);
            if (printedValue) {
                printedValues.push(printedValue);
            }
        });
        return printedValues;
    }

    public processCommand(ops: string) {
        const {operation, value} = this.splitOps(ops);
        switch (operation) {
            case Operation.print:
                return this.print(parseInt(value));
            case Operation.undo:
                this.undo();
                break;
            default:
                this.commandsHistory.push(ops);
                break;
        }
    }

    private splitOps(ops: string): { operation: string, value: string } {
        const splitOps = ops.split(' ')
        return {operation: splitOps[0], value: splitOps[1]};
    }

    public print(number: number) {
        const editor = this.buildFromChanges()
        return editor.print(number);
    }

    private buildFromChanges(): TextEditor {
        const editor = new TextEditor('');
        this.commandsHistory.forEach(command => this.applyChanges(editor, command));
        return editor;
    }

    public applyChanges(editor: TextEditor, ops: string): void {
        const {operation, value} = this.splitOps(ops);

        switch (operation) {
            case Operation.append:
                editor.append(value);
                break;
            case Operation.delete:
                editor.delete(parseInt(value));
                break;
            default:
                throw new Error('Unknown command');
        }
    }

    private undo() {
        this.commandsHistory.pop();
    }
}