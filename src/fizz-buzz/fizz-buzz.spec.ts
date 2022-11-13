class FizzBuzz {
    compute(input: number) {
        const result: string[] = []
        for (let i = 1; i <= input; i++) {
            let str: string = ''
            if (this.divisibleByThree(i)) {
                str = 'Fizz'
            }
            if (this.divisibleByFive(i)) {
                str += 'Buzz'
            }
            if (!this.divisibleByThree(i) && !this.divisibleByFive(i)) {
                str = `${i}`
            }
            result.push(str)
        }
        return result;
    }

    private divisibleByFive(i: number) {
        return (i % 5) === 0;
    }

    private divisibleByThree(i: number) {
        return (i % 3) === 0;
    }
}

describe('FizzBuzz', function () {
    const fizzBuzz = new FizzBuzz()
    it('should return 1 for 1', function () {
        expect(fizzBuzz.compute(1)[0]).toEqual('1')
    });
    it('should return 2 for 2', function () {
        expect(fizzBuzz.compute(2)[1]).toEqual('2')
    });
    it('should return Fizz for 3', function () {
        expect(fizzBuzz.compute(3)[2]).toEqual('Fizz')
    });
    it('should return Buzz for 5', function () {
        expect(fizzBuzz.compute(5)[4]).toEqual('Buzz')
    });
    it('should return FizzBuzz for multiple of both 5 and 3', function () {
        expect(fizzBuzz.compute(15)[14]).toEqual('FizzBuzz')
    });
});