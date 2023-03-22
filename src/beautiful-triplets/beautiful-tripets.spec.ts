class BeautifulTriplets {
    private elementMap: Map<number, boolean> = new Map()

    constructor(private readonly list: number[], private readonly distance: number) {
        this.list.forEach(element => {
            this.elementMap.set(element, true)
        })
    }

    compute() {
        let count = 0
        this.list.forEach(element => {
            if (this.hasBeautifulPairs(element)) count++
        })
        return count
    }

    private hasBeautifulPairs(element: number) {
        return this.existsSecondBeautiful(element) && this.existsThirdBeautiful(element)
    }

    private existsSecondBeautiful(element: number) {
        return this.elementMap.get(element + this.distance);
    }

    private existsThirdBeautiful(element: number) {
        return this.elementMap.get(element + this.distance * 2);
    }
}

describe('BeautifulTriplets', function () {
    it('should return 1 for [1, 2, 3] and distance 1', function () {
        const beautifulTriplets = new BeautifulTriplets([1, 2, 3], 1)
        expect(beautifulTriplets.compute()).toEqual(1)
    });
});