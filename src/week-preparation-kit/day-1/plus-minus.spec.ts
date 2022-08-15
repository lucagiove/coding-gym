class PlusMinus {
    compute(input: number[]) {
        const positiveCount = input.filter(n => n > 0).length
        const negativeCount = input.filter(n => n < 0).length
        const zeroCount = input.filter(n => n === 0).length
        return [
            this.calculateRatio(positiveCount, input.length),
            this.calculateRatio(negativeCount, input.length),
            this.calculateRatio(zeroCount, input.length)]
    }

    private calculateRatio(positiveCount: number, input: number) {
        return (positiveCount / input).toPrecision(6);
    }
}

describe('PlusMinus', function () {
    const input = [-4, 3, -9, 0, 4, 1]
    const plusMinus = new PlusMinus()
    it('should count total positive numbers', function () {
        expect(plusMinus.compute(input)[0]).toEqual(0.500000.toFixed(6))
    });
    it('should count total negative numbers', function () {
        expect(plusMinus.compute(input)[1]).toEqual(0.333333.toFixed(6))
    });
    it('should count total zero numbers', function () {
        expect(plusMinus.compute(input)[2]).toEqual(0.166667.toFixed(6))
    });
});