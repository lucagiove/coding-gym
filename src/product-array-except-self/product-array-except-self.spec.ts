class ProductOfArrayExceptSelf {
    private productFromLeft: number[] = []
    private productFromRight: number[] = []

    public compute(input: string) {
        const arrayOfNumbers = this.convertInputToArrayOfNumbers(input);
        this.productFromLeft = accumulateArrayOfProduct(arrayOfNumbers);
        this.productFromRight = accumulateArrayOfProduct(arrayOfNumbers.reverse()).reverse();

        const result = arrayOfNumbers.map((n, i) => {
            if (i === 0) {
                return this.productFromRight[i + 1]
            }
            if (i + 1 === arrayOfNumbers.length) {
                return this.productFromLeft[i - 1]
            }
            return this.productFromLeft[i - 1] * this.productFromRight[i + 1]
        })

        return result.join(' ')


        function accumulateArrayOfProduct(arrayOfNumbers: number[]): number[] {
            let result: number[] = []
            for (const n of arrayOfNumbers) {
                if (result.length) {
                    result.push(n * result[result.length - 1])
                } else {
                    result.push(n)
                }
            }
            return result
        }
    }


    private convertInputToArrayOfNumbers(input: string): number[] {
        let result: string[] = input.split('\n')
        return result[1].split(' ').map(s => Number(s))
    }
}

describe('Product of Array Except Self', function () {
    it('should return 2 1 for 1 2', function () {
        const poaes = new ProductOfArrayExceptSelf()
        expect(poaes.compute('2\n1 2')).toEqual('2 1')
    });
    it('should return 120 60 40 30 24 for 1 2 3 4 5', function () {
        const poaes = new ProductOfArrayExceptSelf()
        expect(poaes.compute('5\n1 2 3 4 5')).toEqual('120 60 40 30 24')
    });
});
