class DivideAndConquer {
    private readonly _sortedValues: number[]

    constructor(values: number[], public readonly sort: 'ASC' | 'DESC' = 'ASC') {
        this._sortedValues = values.sort()
        if (sort === 'DESC')
            this._sortedValues = this.sortedValues.reverse()
    }

    get sortedValues() {
        return [...this._sortedValues]
    }

    public search(value: number) {
        const length = this._sortedValues.length
        return this.dichotomicSearch(value, 0, length - 1)
    }

    private dichotomicSearch(value: number, start: number, end: number): number | null {
        const middleIndex = (Math.round((end - start) / 2) + start)
        const middleValue = this._sortedValues[middleIndex]

        if (subValuesHasOneElement()) {
            if (value === middleValue) {
                return middleIndex
            } else {
                return null
            }
        }

        if (value === middleValue)
            return middleIndex

        if (this.isElementLeftPart(value, middleValue)) {
            return this.dichotomicSearch(value, start, middleIndex - 1)
        } else {
            return this.dichotomicSearch(value, middleIndex + 1, end)
        }

        function subValuesHasOneElement() {
            return end === start;
        }
    }

    private isElementLeftPart(value: number, middleValue: number) {
        if (this.sort === 'ASC')
             return value < middleValue;
        else
            return value > middleValue
    }
}

describe('DivideAndConquer', function () {

    describe('Given an odd array of 3 elements and ASC sorting', function () {
        let dc: DivideAndConquer
        beforeEach(function () {
            dc = new DivideAndConquer([3, 1, 2])
        });
        it('should be sorted', function () {
            expect(dc.sortedValues).toEqual([1, 2, 3])
        });
        it('should return the middle element index if found', function () {
            expect(dc.search(2)).toEqual(1)
        });
        it('should return the first element index if found', function () {
            expect(dc.search(1)).toEqual(0)
        });
        it('should return the last element index if found', function () {
            expect(dc.search(3)).toEqual(2)
        });
        it('should return null if not found', function () {
            expect(dc.search(100)).toEqual(null)
        });
    });

    describe('Given an even array of 4 elements and ASC sorting', function () {
        let dc: DivideAndConquer
        beforeEach(function () {
            dc = new DivideAndConquer([3, 1, 2, 4])
        });
        it('should be sorted', function () {
            expect(dc.sortedValues).toEqual([1, 2, 3, 4])
        });
        it('should return the first element index if found', function () {
            expect(dc.search(1)).toEqual(0)
        });
        it('should return the second element index if found', function () {
            expect(dc.search(2)).toEqual(1)
        });
        it('should return the third element index if found', function () {
            expect(dc.search(3)).toEqual(2)
        });
        it('should return the fourth element index if found', function () {
            expect(dc.search(4)).toEqual(3)
        });
    });

    describe('Given an odd array of 3 elements and DESC sorting', function () {
        let dc: DivideAndConquer
        beforeEach(function () {
            dc = new DivideAndConquer([3, 1, 2], "DESC")
        });
        it('should be sorted', function () {
            expect(dc.sortedValues).toEqual([3, 2, 1])
        });
        it('should return the middle element index if found', function () {
            expect(dc.search(2)).toEqual(1)
        });
        it('should return the first element index if found', function () {
            expect(dc.search(1)).toEqual(2)
        });
        it('should return the last element index if found', function () {
            expect(dc.search(3)).toEqual(0)
        });
        xit('should return null if not found', function () {
            expect(dc.search(100)).toEqual(null)
        });
    });

    describe('Given an even array of 4 elements and DESC sorting', function () {
        let dc: DivideAndConquer
        beforeEach(function () {
            dc = new DivideAndConquer([3, 1, 2, 4], "DESC")
        });
        it('should be sorted', function () {
            expect(dc.sortedValues).toEqual([4, 3, 2, 1])
        });
        it('should return the first element index if found', function () {
            expect(dc.search(1)).toEqual(3)
        });
        it('should return the second element index if found', function () {
            expect(dc.search(2)).toEqual(2)
        });
        it('should return the third element index if found', function () {
            expect(dc.search(3)).toEqual(1)
        });
        it('should return the fourth element index if found', function () {
            expect(dc.search(4)).toEqual(0)
        });
    });

});