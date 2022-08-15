class MinMaxSum {
    compute(input: number[]) {
        const max = Math.max(...input)
        const min = Math.min(...input)

        const inputWithoutMax = this.removeElementFromArray(max, input)
        const inputWithoutMin = this.removeElementFromArray(min, input)

        return [
            this.sumArrayElements(inputWithoutMax),
            this.sumArrayElements(inputWithoutMin)
        ]
    }

    private sumArrayElements(inputWithoutMax: number[]) {
        return inputWithoutMax.reduce((sum, e) => {
            return sum + e
        });
    }

    private removeElementFromArray(max: number, input: number[]) {
        return input.filter((e, index) => index !== input.indexOf(max));
    }
}

describe('MinMaxSum', function () {
    const input = [1, 2, 3, 4, 5]
    const minMaxSum = new MinMaxSum()
    it('should calculate the minimum sum of 4 to 5 array elements', function () {
        expect(minMaxSum.compute(input)[0]).toEqual(10)
    });
    it('should calculate the maximum sum of 4 to 5 array elements', function () {
        expect(minMaxSum.compute(input)[1]).toEqual(14)
    });
});