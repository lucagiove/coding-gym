class DivideAndConquer {
    private readonly _sortedValues: number[]

    constructor(values: number[], public readonly sorted: 'ASC' | 'DESC' = 'ASC', sort = true) {
        if (!sort) {
            this._sortedValues = values
            return
        }
        if (sorted === 'DESC') {
            this._sortedValues = values.sort((a, b) => b - a)
            return
        }
        this._sortedValues = values.sort((a, b) => a - b)
    }

    get sortedValues() {
        return [...this._sortedValues]
    }

    public search(value: number): number | null {
        return this.dichotomicSearch(value, 0, this._sortedValues.length - 1)
    }

    lowerBound(value: number): number {
        const result = this.dichotomicSearch(value, 0, this._sortedValues.length - 1, true)
        //if (result === null) throw new Error('Something wrong in lower bound algorithm')
        return result!
    }

    private dichotomicSearch(value: number, start: number, end: number, lowerBound: boolean = false): number | null {
        const middleIndex = (Math.round((end - start) / 2) + start)
        const middleValue = this._sortedValues[middleIndex]

        if (subValuesHasOneElement()) {
            if (isAMatchOrLowerBound()) {
                return middleIndex
            } else {
                return null
            }
        }

        if (value === middleValue)
            return middleIndex

        if (this.isElementLeftPart(value, middleValue)) {
            return this.dichotomicSearch(value, start, middleIndex - 1, lowerBound)
        } else {
            return this.dichotomicSearch(value, middleIndex + 1, end, lowerBound)
        }

        function subValuesHasOneElement() {
            return end === start;
        }

        function isAMatchOrLowerBound() {
            return value === middleValue || lowerBound;
        }
    }

    private isElementLeftPart(value: number, middleValue: number) {
        if (this.sorted === 'ASC')
            return value < middleValue;
        else
            return value > middleValue
    }
}

describe('DivideAndConquer', function () {

    describe('search', function () {
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

        describe('Given an even array of 8 elements and ASC sorting', function () {
            let dc: DivideAndConquer
            beforeEach(function () {
                dc = new DivideAndConquer([3, 1, 2, 4, 6, 12, 24, 64, 32, 15])
            });
            it('should be sorted', function () {
                expect(dc.sortedValues).toEqual([1, 2, 3, 4, 6, 12, 15, 24, 32, 64])
            });
            it('should return 2 for element in third position', function () {
                expect(dc.search(3)).toEqual(2)
            });
            it('should return 8 for element in ninth position', function () {
                expect(dc.search(32)).toEqual(8)
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

    describe('lowerBound', function () {
        describe('Given an odd array of 3 elements and ASC sorting', function () {
            let dc: DivideAndConquer
            beforeEach(function () {
                dc = new DivideAndConquer([1, 5, 3], 'ASC')
            });
            it('should be sorted', function () {
                expect(dc.sortedValues).toEqual([1, 3, 5])
            });
            it('should return the first element if value is between first and second', function () {
                expect(dc.lowerBound(2)).toEqual(0)
            });
            it('should return the first element if value is smaller than first', function () {
                expect(dc.lowerBound(0)).toEqual(0)
            });
            it('should return the first element if value is smaller than first', function () {
                expect(dc.lowerBound(0)).toEqual(0)
            });
        });
    });

});