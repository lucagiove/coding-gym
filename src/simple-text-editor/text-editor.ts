export class TextEditor {
    constructor(public value: string) {
    }

    public append(f: string) {
        this.value = this.value + f;
    }

    public delete(number: number) {
        this.value = this.value.slice(0, this.value.length - number);
    }

    public print(number: number) {
        return this.value[number - 1];
    }
}