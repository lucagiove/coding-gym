class TicTacToe {
    private firstPlayerTurn: boolean = true
    private board: sign[][] = new Array(3)
    private winner: 1 | 2 | undefined = undefined

    constructor() {
        for (let row = 0; row < 3; row++) {
            this.board[row] = new Array(3)
        }
    }


    drawTo(row: number, column: number) {
        if (this.board[row][column]) throw new Error('Position already used')

        this.board[row][column] = this.firstPlayerTurn ? sign.X : sign.O
        this.checkWinner()
        this.changeTurn();
    }

    private changeTurn() {
        this.firstPlayerTurn = !this.firstPlayerTurn
    }

    getSign(row: number, column: number) {
        return this.board[row][column]
    }

    getWinner(): 1 | 2 | undefined {
        return this.winner
    }

    private checkWinner() {
        this.winner = this.firstPlayerTurn ? 1 : 2
    }
}

enum sign {
    X = 'X',
    O = 'O'
}

describe('TicTacToe', function () {
    describe('Given the game just started', function () {
        const ticTacToe = new TicTacToe()
        describe('When the first player plays', function () {
            ticTacToe.drawTo(0, 0)
            it('Then it should be X ', function () {
                expect(ticTacToe.getSign(0, 0)).toEqual(sign.X)
            });
        });
    });
    describe('Given the first player played', function () {
        const ticTacToe = new TicTacToe()
        ticTacToe.drawTo(0, 0)
        describe('When the second player plays', function () {
            ticTacToe.drawTo(0, 1)
            it('Then it should be O ', function () {
                expect(ticTacToe.getSign(0, 1)).toEqual(sign.O)
            });
        });
    });
    describe('Given the first player played in 0, 0', function () {
        const ticTacToe = new TicTacToe()
        ticTacToe.drawTo(0, 0)

        describe('When the second player plays in 0,0 ', function () {
            it('Then it should return an error', function () {
                expect(() => {
                    ticTacToe.drawTo(0, 0)
                }).toThrow()
            });
        });
    });
    describe('Given first player with 1 sign in a row', function () {
        const ticTacToe = new TicTacToe()
        ticTacToe.drawTo(0, 0) // player 1
        ticTacToe.drawTo(0, 1) // player 2
        ticTacToe.drawTo(1, 0) // player 1
        ticTacToe.drawTo(0, 2) // player 2
        describe('When the first place the 3rd sign in a row', function () {
            ticTacToe.drawTo(2, 0) // player 1

            it('Then it should win', function () {
                expect(ticTacToe.getWinner()).toEqual(1)
            });
        });
    });
    describe('Given first player with 2 sign in a row', function () {
        const ticTacToe = new TicTacToe()
        ticTacToe.drawTo(0, 1) // player 1
        ticTacToe.drawTo(0, 0) // player 2
        ticTacToe.drawTo(0, 2) // player 1
        ticTacToe.drawTo(1, 0) // player 2
        ticTacToe.drawTo(2, 2) // player 1
        describe('When the second place the 3rd sign in a row', function () {
            ticTacToe.drawTo(2, 0) // player 2

            it('Then it should win', function () {
                expect(ticTacToe.getWinner()).toEqual(2)
            });
        });
    });
});

// Fake it
// Obvious Solution
// Triangulation