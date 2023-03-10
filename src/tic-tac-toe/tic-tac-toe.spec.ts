class Board {
    private board: sign[][] = new Array(3)

    constructor() {
        for (let row = 0; row < 3; row++) {
            this.board[row] = new Array(3)
        }
    }

    getSign(row: number, column: number) {
        return this.board[row][column]
    }

    setSign(row: number, column: number, sign: sign){
        this.board[row][column] = sign
    }
}

class TicTacToe {
    private firstPlayerTurn: boolean = true
    private board = new Board()
    private turn: number = 1
    private winner: 1 | 2 | undefined | null = undefined


    drawTo(row: number, column: number) {
        if (this.board.getSign(row, column)) throw new Error('Position already used')

        this.board.setSign(row, column, this.firstPlayerTurn ? sign.X : sign.O)
        this.checkWinner()
        this.changeTurn();
    }

    private changeTurn() {
        this.firstPlayerTurn = !this.firstPlayerTurn
        this.turn += 1
    }

    getSign(row: number, column: number) {
        return this.board.getSign(row, column)
    }

    getWinner(): 1 | 2 | undefined | null{
        return this.winner
    }

    private checkWinner() {
        if(this.turn === 9) {
            this.winner = null
            return
        }
        this.winner = this.firstPlayerTurn ? 1 : 2
    }
}

enum sign {
    X = 'X',
    O = 'O'
}

describe('TicTacToe', function () {

    describe('Scenario: First sign is X second O', function () {
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
    });

    describe('Scenario: Cannot sign twice the same', function () {
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
    });

    describe('Scenario: Player with three sign in a row wins', function () {
        describe('Given the first player with 2 sign in a row', function () {
            // X | O | O |
            // X |   |   |
            //   |   |   |

            const ticTacToe = new TicTacToe()
            ticTacToe.drawTo(0, 0) // player 1
            ticTacToe.drawTo(0, 1) // player 2
            ticTacToe.drawTo(1, 0) // player 1
            ticTacToe.drawTo(0, 2) // player 2
            describe('When the first player place the 3rd sign in a row', function () {
                // X | O | O |
                // X |   |   |
                // X |   |   | <-

                ticTacToe.drawTo(2, 0) // player 1

                it('Then it should win', function () {
                    expect(ticTacToe.getWinner()).toEqual(1)
                });
            });
        });
        describe('Given the second player with 2 sign in a row', function () {
            // O | X | X |
            // O |   |   |
            //   |   | X |

            const ticTacToe = new TicTacToe()
            ticTacToe.drawTo(0, 1) // player 1
            ticTacToe.drawTo(0, 0) // player 2
            ticTacToe.drawTo(0, 2) // player 1
            ticTacToe.drawTo(1, 0) // player 2
            ticTacToe.drawTo(2, 2) // player 1
            describe('When the second place the 3rd sign in a row', function () {
                // O | X | X |
                // O |   |   |
                // O |   | X | <-

                ticTacToe.drawTo(2, 0) // player 2

                it('Then it should win', function () {
                    expect(ticTacToe.getWinner()).toEqual(2)
                });
            });
        });
    });

    describe('Scenario: All places used with no winner', function () {
        describe('Given players used all but one places', function () {
            // O | X | X |
            // O | X | O |
            //   | O | X |

            const ticTacToe = new TicTacToe()
            ticTacToe.drawTo(0, 1) // player 1
            ticTacToe.drawTo(0, 0) // player 2
            ticTacToe.drawTo(0, 2) // player 1
            ticTacToe.drawTo(1, 0) // player 2
            ticTacToe.drawTo(2, 2) // player 1
            ticTacToe.drawTo(2, 1) // player 2
            ticTacToe.drawTo(1, 1) // player 1
            ticTacToe.drawTo(1, 2) // player 2
            describe('When the last place is used', function () {
                // O | X | X |
                // O | X | O |
                //   | O | X | <-

                ticTacToe.drawTo(2, 0) // player 1

                it('Then game should end in a draw', function () {
                    expect(ticTacToe.getWinner()).toEqual(null)
                });
            });
        });

    });
});

// Fake it
// Obvious Solution
// Triangulation