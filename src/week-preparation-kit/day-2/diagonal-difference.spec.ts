class DiagonalDifference {
    constructor(private readonly rows: number,
                private readonly matrix: number[][]) {
    }

    leftDiagonal() {
        let result: number[] = []
        for (let i = 0; i < this.rows; i++) {
            result.push(this.matrix[i][i])
        }
        return result;
    }

    rightDiagonal() {
        let result: number[] = []
        for (let i = 0, j = this.rows - 1; i < this.rows; i++, j--) {
            result.push(this.matrix[i][j])
        }
        return result;
    }

    calculate(){
        const leftDiagonalSum = this.leftDiagonal().reduce((sum, element) => sum + element)
        const rightDiagonalSum = this.rightDiagonal().reduce((sum, element) => sum + element)
        return Math.abs(leftDiagonalSum - rightDiagonalSum)
    }
}

describe('DiagonalDifference', function () {
    const input = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ]
    const diagonalDifference = new DiagonalDifference(3, input)
    describe('leftDiagonal', function () {
        it('should return the diagonal left to right', function () {
            expect(diagonalDifference.leftDiagonal()).toEqual([1, 5, 9])
        });
    });
    describe('rightDiagonal', function () {
        it('should return the diagonal right to left', function () {
            expect(diagonalDifference.rightDiagonal()).toEqual([3, 5, 9])
        });
    });
    describe('calculate', function () {
        it('should return the difference between two diagonals in absolute value', function () {
            expect(diagonalDifference.calculate()).toEqual(2)
        });
    });
});