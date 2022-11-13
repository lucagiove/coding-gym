enum CellStatus { dead, alive}


interface Rule {
    evaluate(liveCells: CellStatus[]): CellStatus;

    doesApply(liveCells: CellStatus[]): boolean;
}

class StarvationRule implements Rule {
    evaluate(liveCells: CellStatus[]) {
        return CellStatus.dead;
    }

    doesApply(liveCells: CellStatus[]) {
        return liveCells.length < 2;
    }
}

class SurvivalRule implements Rule {
    doesApply(liveCells: CellStatus[]) {
        return [2, 3].includes(liveCells.length) ;
    }

    evaluate(liveCells: CellStatus[]) {
        return CellStatus.alive
    }
}

class Rules {
    rules: Rule[]
    constructor(survivalRule: SurvivalRule, starvationRule: StarvationRule) {
        this.rules = [survivalRule, starvationRule]
    }

    evaluate(liveCells: CellStatus[]) {
        for (const rule of this.rules) {
            if(rule.doesApply(liveCells)) {
                return rule.evaluate(liveCells)
            }
        }
    }
}

describe('game of life', function () {
    describe("starvation", function (){
        describe("applies", function (){
            it('1 cells', function () {
                const liveCells = [CellStatus.alive]
                const rule = new StarvationRule()
                expect(rule.doesApply(liveCells)).toEqual(true)
            });
            it('0 cells', function () {
                const liveCells:CellStatus[] = []
                const rule = new StarvationRule()
                expect(rule.doesApply(liveCells)).toEqual(true)
            });
            it('starvation: < 2, dies', function () {
                const liveCells = [CellStatus.alive]
                const rule = new StarvationRule()
                expect(rule.evaluate(liveCells)).toEqual(CellStatus.dead)
            });
        })
        it('2 or more cells does not apply', function () {
            const liveCells = [CellStatus.alive,CellStatus.alive]
            const rule = new StarvationRule()
            expect(rule.doesApply(liveCells)).toEqual(false)
        });
    })
    describe('survive', function () {
        describe('applies', function () {
            it('2 cells', function () {
                const liveCells = [CellStatus.alive, CellStatus.alive]
                const rule = new SurvivalRule()
                expect(rule.doesApply(liveCells)).toEqual(true)
            });
            it('3 cells', function () {
                const liveCells = [CellStatus.alive, CellStatus.alive, CellStatus.alive]
                const rule = new SurvivalRule()
                expect(rule.doesApply(liveCells)).toEqual(true)
            });
            it('survive: 2 <= x <= 3', function () {
                const liveCells = [CellStatus.alive, CellStatus.alive]
                const rule = new SurvivalRule()
                expect(rule.evaluate(liveCells)).toEqual(CellStatus.alive)
            });
        });
        describe('does not apply', function () {
            it('< 2 does not apply', function () {
                const liveCells = [CellStatus.alive]
                const rule = new SurvivalRule()
                expect(rule.doesApply(liveCells)).toEqual(false)
            });
            it('> 3 does not apply', function () {
                const liveCells = [CellStatus.alive, CellStatus.alive, CellStatus.alive, CellStatus.alive, ]
                const rule = new SurvivalRule()
                expect(rule.doesApply(liveCells)).toEqual(false)
            });
        });
    });

    describe('rules composition', function () {
        it('cell dies for starvation', function () {
            const liveCells:CellStatus[] = []
            const rule = new Rules(new SurvivalRule(), new StarvationRule())
            expect(rule.evaluate(liveCells)).toEqual(CellStatus.dead)
        });

        it('cell survives', function () {
            const liveCells:CellStatus[] = [CellStatus.alive, CellStatus.alive, CellStatus.alive] // TODO this could be a number
            const rule = new Rules(new SurvivalRule(), new StarvationRule())
            expect(rule.evaluate(liveCells)).toEqual(CellStatus.alive)
        });
    });

});