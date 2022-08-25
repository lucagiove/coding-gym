class TowerBreakers {
    private turn = 1
    private winner: number | undefined = undefined
    private readonly towers: number[] = []

    constructor(numberOfTowers: number, towersHeight: number) {
        this.towers = [towersHeight]
    }

    run() {
        while(this.winner === undefined) {
            this.play()
            this.changeTurn()
        }
        return this.winner;
    }

    private play() {
        const towerHeight = this.towers[0]
        if (towerHeight === 1)
            this.winner = this.nextPlayer()

    }

    private changeTurn() {
        this.turn = this.nextPlayer()
    }

    private nextPlayer() {
        if (this.turn === 1)
            return 2
        if (this.turn === 2)
            return 1
        throw Error()
    }
}

describe('TowerBreakers', function () {
    it('should return player 2 for n = 1 and m = 1', function () {
        const towerBreakers = new TowerBreakers(1, 1)
        expect(towerBreakers.run()).toEqual(2)
    });
    it('should return player 1 for n = 1 and m = 2', function () {
        const towerBreakers = new TowerBreakers(1, 2)
        expect(towerBreakers.run()).toEqual(1)
    });
});