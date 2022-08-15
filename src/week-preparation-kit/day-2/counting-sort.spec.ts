class CountingSort {
    compute(input: number[]) {
        const result: number[] = []
        for (let i = 0; i < 100; i++) {
            result.push(0)
        }
        result.length = input.length
        input.map(n => {
            result[n] += 1
        })
        return result
    }
}

describe('CountingSort', function () {
    const countingSort = new CountingSort()
    const input = [1, 1, 3, 2, 1]
    it('should return a frequency array', function () {
        expect(countingSort.compute(input)).toEqual([0, 3, 1, 1, 0])
    });
});