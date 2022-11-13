import {testCase3} from "./test-case-3";

class MinimumLoss {
    constructor(private chart: number[]) {
    }

    computeNestedLoop() {
        let minimumLoss: number = -1
        for (let buyYear = 0; buyYear < this.chart.length; buyYear++) {
            for (let sellYear = buyYear + 1; sellYear < this.chart.length; sellYear++) {
                let loss = this.chart[buyYear] - this.chart[sellYear]
                if (loss < 0) continue
                if (minimumLoss === -1) minimumLoss = loss
                if (loss < minimumLoss) minimumLoss = loss
            }
        }
        return minimumLoss;
    }

    computeSort() {
        let minimumLoss: number = -1
        for (let buyYear = 0; buyYear < this.chart.length; buyYear++) {
            const sortedChart = this.sortDesc(this.chart.slice(buyYear + 1))

            for (const sellValue of sortedChart) {
                let loss = this.chart[buyYear] - sellValue
                if (loss <= 0) continue
                if (minimumLoss === -1) minimumLoss = loss
                if (loss < minimumLoss) {
                    minimumLoss = loss
                    break
                }
            }
        }
        return minimumLoss;
    }

    compute() {
        let minimumLoss: number | undefined = undefined

        const sortedChart = this.sortDesc(this.chart)
        const priceHistoryMap = new Map<number, number>()
        for (let i = 0; i < this.chart.length; i++) {
            priceHistoryMap.set(this.chart[i], i)
        }

        for (let i = 0; i < sortedChart.length; i++) {
            const buyValue = sortedChart[i]
            let sellValue: number
            for (let j = i + 1; j < sortedChart.length; j++) {
                sellValue = sortedChart[j]
                if (priceHistoryMap.get(buyValue)! < priceHistoryMap.get(sellValue)!) {
                    break
                }
                j++
            }

            let loss = buyValue - sellValue!
            if (minimumLoss === undefined) minimumLoss = loss
            if (loss < minimumLoss) {
                minimumLoss = loss
            }
        }

        return minimumLoss
    }

    private sortDesc(chart: number[]) {
        const sortedChart = [...chart]
        return sortedChart.sort((a, b) => {
            if (a > b) return -1
            if (a < b) return 1
            return 0
        });
    }
}

describe('MinimumLoss', function () {
    it('should return 3 for [20, 15, 8, 2, 12]', function () {
        const minimumLoss = new MinimumLoss([20, 15, 8, 2, 12])
        expect(minimumLoss.compute()).toEqual(3)
    });

    it('should return 2 for [5, 10, 3]', function () {
        const minimumLoss = new MinimumLoss([5, 10, 3])
        expect(minimumLoss.compute()).toEqual(2)
    });

    it('should return 2 for [20, 7, 8, 2, 5]', function () {
        const minimumLoss = new MinimumLoss([20, 7, 8, 2, 5])
        expect(minimumLoss.compute()).toEqual(2)
    });

    it('should return 13572 for test case 3', function () {
        const minimumLoss = new MinimumLoss(testCase3)
        expect(minimumLoss.compute()).toEqual(13572)
    });
});