class FibonacciNumber {
    number(value: number): number {
        if (value === 0) return 0
        if (value === 1) return 1
        return this.number(value - 1) + this.number(value - 2)
    }
}

describe('fibonacci-number', function () {
    let fibonacciNumber: FibonacciNumber
    beforeEach(function () {
        fibonacciNumber = new FibonacciNumber()
    });
    test('should return 0 for 0', function () {
        expect(fibonacciNumber.number(0)).toEqual(0)
    });
    test('should return 1 for 1', function () {
        expect(fibonacciNumber.number(1)).toEqual(1)
    });
    test('should return 1 for 2', function () {
        expect(fibonacciNumber.number(2)).toEqual(1)
    });
    test('should return 2 for 3', function () {
        expect(fibonacciNumber.number(3)).toEqual(2)
    });
    test('should return 55 for 10', function () {
        expect(fibonacciNumber.number(10)).toEqual(55)
    });
});

// 0 1 2 3 4 5 6 7  8  9  10
// 0,1,1,2,3,5,8,13,21,34,55
