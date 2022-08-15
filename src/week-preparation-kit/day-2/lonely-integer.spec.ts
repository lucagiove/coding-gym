class LonelyInteger {
    find(input: number[]) {
        const counterMap = new Map()
        for (const element of input) {
            let counter = counterMap.get(element)
            if (!counter)
                counter = 1
            else
                counter += 1
            counterMap.set(element, counter)
        }
        let result
        counterMap.forEach((value, key) => {
            if (value === 1) result = key})
        return result
    }
}

describe('LonelyInteger', function () {
    const lonelyInteger = new LonelyInteger()
    const input = [1, 2, 3, 4, 3, 2, 1]
    it('should return the only element that occurs once', function () {
        expect(lonelyInteger.find(input)).toEqual(4)
    });
});