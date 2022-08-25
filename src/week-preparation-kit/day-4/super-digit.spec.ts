class SuperDigit {

    constructor(private readonly n: number, private readonly k: number) {
    }

    get input(): bigint {
        let result = ''
        for (let i = 0; i < this.k; i++) {
            result += this.n
        }
        return BigInt(result)
    }

    calculate() {
        return this.superDigit(BigInt(this.input))
    }

    superDigit(input: bigint): bigint {
        if (String(input).length === 1)
            return BigInt(input)
        else {
            let result = BigInt(0)
            for (const char of String(input)) {
                result += BigInt(parseInt(char))
            }
            return this.superDigit(result)
        }
    }
}

describe('SuperDigit', function () {
    describe('input', function () {
        it('should concatenate input string n for k times', function () {
            const superDigit = new SuperDigit(9875, 4)
            expect(superDigit.input).toEqual(BigInt("9875987598759875"))
        });
    });
    describe('calculate', function () {
        it('should calculate the super digit of 9875', function () {
            const superDigit = new SuperDigit(9875, 1)
            expect(superDigit.calculate()).toEqual(BigInt(2))
        });
        it('should calculate the super digit of 9875987598759875', function () {
            const superDigit = new SuperDigit(9875, 4)
            expect(superDigit.calculate()).toEqual(BigInt(8))
        });
    });
});