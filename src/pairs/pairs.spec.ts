class Pairs {
    compute(input: number[], k: number) {
        let result = 0
        const map = new Map<number, number>()
        for (const element of input) {
            map.set(element, element)
        }

        for (const i of input) {
            const sum = i + k
            if(map.get(sum)){
                result++
            }
        }
        return result;
    }
}

describe('Pairs', function () {
    it('should return 3 for 1 2 3 4 and 2 as k', function () {
        const pairs = new Pairs()

        const expected = pairs.compute([1, 2, 3, 4], 1)

        expect(expected).toEqual(3)
    });
    it('should return 3 for [1, 5, 3, 4, 2]', function () {
        const pairs = new Pairs()
        expect(pairs.compute([1, 5, 3, 4, 2], 2)).toEqual(3)
    });
});