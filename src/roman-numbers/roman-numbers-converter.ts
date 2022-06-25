export class RomanNumbersConverter {

    convert(input: number) {
        let result = '';

        while (input >= 1000) {
            result = result + 'M';
            input = input - 1000;
        }
        while (input >= 500) {
            result = result + 'D';
            input = input - 100;
        }
        while (input >= 100) {
            result = result + 'C';
            input = input - 100;
        }
        while (input >= 50) {
            result = result + 'L';
            input = input - 50;
        }
        while (input >= 10) {
            result = result + 'X';
            input = input - 10;
        }

        if (input === 9) {
            return result + 'IX';
        }

        while (input >= 5 && input < (10 - 1)) {
            result = result + 'V';
            input = input - 5
        }

        if (input === (5 - 1)) {
            result = result + 'IV';
        }

        while (input > 0 && input < (5 - 1)) {
            result = result + 'I';
            input--;
        }
        return result;
    }
}

const RomanNumbersMap = new Map<number,string>
