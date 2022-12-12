import {testcase8} from "./testcase-8";

class ClimbingTheLeaderboard {
    private scoresUnique: number[];

    constructor(scores: number[]) {
        this.scoresUnique = Array.from(new Set(scores))
    }

    addScore(value: number): number {
        for (const [index, score] of this.scoresUnique.entries()) {
            if (value === score) {
                return index + 1
            }
            if (value > score) {
                this.scoresUnique.splice(index, 0, value)
                return index + 1
            }
        }
        return this.scoresUnique.length + 1
    }

    addScores(scores: number[]) {
        const result: number[] = []
        for (const score of scores) {
            result.push(this.addScore(score))
        }
        return result
    }
}


describe('ClimbingTheLeaderboard', function () {
    it('should return 1 if there are no other scores', function () {
        const leaderboard = new ClimbingTheLeaderboard([])
        expect(leaderboard.addScore(100)).toEqual(1)
    });
    it('should return the position of the same score already scored', function () {
        const leaderboard = new ClimbingTheLeaderboard([100, 50])
        expect(leaderboard.addScore(100)).toEqual(1)
    });
    it('should return the position of the higher score if higher of the maximum', function () {
        const leaderboard = new ClimbingTheLeaderboard([100, 50])
        expect(leaderboard.addScore(200)).toEqual(1)
    });
    it('should return 2 when higher score is stored already', function () {
        const leaderboard = new ClimbingTheLeaderboard([100])
        expect(leaderboard.addScore(50)).toEqual(2)
    });
    it('should pass test case -1', function () {
        const leaderboard = new ClimbingTheLeaderboard([100, 90, 90, 80])
        expect(leaderboard.addScores([70, 80, 105])).toEqual([4, 3, 1])
    });
    it('should pass test case 0', function () {
        const leaderboard = new ClimbingTheLeaderboard([100, 100, 50, 40, 40, 20, 10])
        expect(leaderboard.addScores([5, 25, 50, 120])).toEqual([6, 4, 2, 1])
    });
    it('should pass test case 8', function () {
        const leaderboard = new ClimbingTheLeaderboard(testcase8.ranked)
        expect(leaderboard.addScores(testcase8.player)).toEqual(testcase8.expected)
    });
});