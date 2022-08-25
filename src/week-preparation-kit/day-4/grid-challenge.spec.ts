class GridChallenge {
    matrix: string[][] = []

    constructor(private grid: string[]) {
        for (const string of grid) {
            this.matrix.push(string.split(''))
        }
    }

    static invertRowsWithColumns(matrix: string[][]) {
        let result: string[][] = []
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row === 0) result[col] = []
                result[col][row] = matrix[row][col]
            }
        }
        return result;
    }

    static sort(matrix: string[][]) {
        let result: string[][] = []
        for (let i = 0; i < matrix.length; i++) {
            result.push([...matrix[i]])
            result[i].sort()
        }
        return result;
    }

    sortHorizontally() {
        return GridChallenge.sort(this.matrix);
    }

    isVerticallySorted(horizontallySorted: string[][]) {
        const verticallySorted =
            GridChallenge.invertRowsWithColumns(
                GridChallenge.sort(
                    GridChallenge.invertRowsWithColumns(horizontallySorted)));
        return horizontallySorted.toString() === verticallySorted.toString()
    }
}

describe('GridChallenge', function () {
    describe('invertRowsWithColumns', function () {
        it('should invert a matrix 2 x 2', function () {
            const matrix = [
                ['a1', 'a2'],
                ['b1', 'b2']
            ]
            expect(GridChallenge.invertRowsWithColumns(matrix)).toEqual([
                ['a1', 'b1'],
                ['a2', 'b2']
            ])
        });
        it('should return the same output if called twice', function () {
            const matrix = [
                ['a1', 'a2'],
                ['b1', 'b2']
            ]
            expect(GridChallenge.invertRowsWithColumns(GridChallenge.invertRowsWithColumns(matrix))).toEqual(matrix)
        });
    });

    describe('sort', function () {
        it('should sort a matrix 2 x 2', function () {
            const matrix = [
                ['z', 'a'],
                ['w', 'b']
            ]
            expect(GridChallenge.sort(matrix)).toEqual([
                ['a', 'z'],
                ['b', 'w']
            ])
        });
    });

    describe('constructor', function () {
        it('should create a matrix from a grid of string array', function () {
            const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
            const gridChallenge = new GridChallenge(grid)
            expect(gridChallenge.matrix).toEqual([
                ["e", "b", "a", "c", "d"],
                ["f", "g", "h", "i", "j"],
                ["o", "l", "m", "k", "n"],
                ["t", "r", "p", "q", "s"],
                ["x", "y", "w", "u", "v"]
            ])
        });
        it('should sort rows', function () {
            const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
            const gridChallenge = new GridChallenge(grid)
            expect(gridChallenge.sortHorizontally()).toEqual([
                ["a", "b", "c", "d", "e"],
                ["f", "g", "h", "i", "j"],
                ["k", "l", "m", "n", "o"],
                ["p", "q", "r", "s", "t"],
                ["u", "v", "w", "x", "y"]
            ])
        });
        it('return yes if columns are sorted as well', function () {
            const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
            const gridChallenge = new GridChallenge(grid)
            const sorted = gridChallenge.sortHorizontally()
            expect(gridChallenge.isVerticallySorted(sorted)).toEqual(true)
        });
        it('return yes if columns are sorted as well', function () {
            const grid = ['xywuv', 'fghij', 'olmkn', 'trpqs', 'ebacd']
            const gridChallenge = new GridChallenge(grid)
            const sorted = gridChallenge.sortHorizontally()
            expect(gridChallenge.isVerticallySorted(sorted)).toEqual(false)
        });
    });
});