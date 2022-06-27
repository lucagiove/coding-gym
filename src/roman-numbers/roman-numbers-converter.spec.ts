class RomanNumbers {

    private romanArabicMatch = [
        {roman: 'M', arabic: 1000},
        {roman: 'CM', arabic: 900},
        {roman: 'D', arabic: 500},
        {roman: 'CD', arabic: 400},
        {roman: 'C', arabic: 100},
        {roman: 'XC', arabic: 90},
        {roman: 'L', arabic: 50},
        {roman: 'XL', arabic: 40},
        {roman: 'X', arabic: 10},
        {roman: 'IX', arabic: 9},
        {roman: 'V', arabic: 5},
        {roman: 'IV', arabic: 4},
        {roman: 'I', arabic: 1},
    ]

    private getHighestMatch(arabic: number) {
        return this.romanArabicMatch.find(n => n.arabic <= arabic) || {roman: '', arabic: 0}
    }

    public convert(input: number) {
        let result = ''
        while (input > 0) {
            const romanArabicMatch = this.getHighestMatch(input)
            result += romanArabicMatch.roman
            input -= romanArabicMatch.arabic
        }
        return result
    }
}

describe('RomanNumbers', function () {
    let roman: RomanNumbers
    beforeEach(function () {
        roman = new RomanNumbers()
    });
    it('should 1', function () {
        expect(roman.convert(1)).toEqual('I')
    });
    it('should 4', function () {
        expect(roman.convert(4)).toEqual('IV')
    });
    it('should 10', function () {
        expect(roman.convert(10)).toEqual('X')
    });
    it('should 30', function () {
        expect(roman.convert(30)).toEqual('XXX')
    });
    it('should 50', function () {
        expect(roman.convert(50)).toEqual('L')
    });
    it('should 80', function () {
        expect(roman.convert(80)).toEqual('LXXX')
    });
    it('should 100', function () {
        expect(roman.convert(100)).toEqual('C')
    });
    it('should 110', function () {
        expect(roman.convert(110)).toEqual('CX')
    });
    it('should 500', function () {
        expect(roman.convert(500)).toEqual('D')
    });
    it('should 530', function () {
        expect(roman.convert(530)).toEqual('DXXX')
    });
    it('should 540', function () {
        expect(roman.convert(540)).toEqual('DXL')
    });
    it('should 139', function () {
        expect(roman.convert(139)).toEqual('CXXXIX')
    });

});
