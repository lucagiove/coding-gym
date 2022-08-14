class SubstringsGenerator {
    public generate(input: string) {
        const result = []
        for (let subStringLength = 1; subStringLength <= input.length; subStringLength++) {
            for (let i = 0, j = subStringLength; (i < input.length && j <= input.length); i++, j++) {
                result.push(input.substring(i, j))
            }
        }
        return result
    }
}

describe('SubstringsGenerator', function () {
    it('should return empty for empty values', function () {
        const substringsGenerator = new SubstringsGenerator()
        expect(substringsGenerator.generate('')).toEqual([])
    });
    it('should return the same char for single char', function () {
        const substringsGenerator = new SubstringsGenerator()
        expect(substringsGenerator.generate('a')).toEqual(['a'])
    });
    it('should return three values for two chars string', function () {
        const substringsGenerator = new SubstringsGenerator()
        expect(substringsGenerator.generate('ab')).toEqual(['a', 'b', 'ab'])
    });
    it('should return six values for three chars string', function () {
        const substringsGenerator = new SubstringsGenerator()
        expect(substringsGenerator.generate('abc')).toEqual(['a', 'b', 'c', 'ab', 'bc', 'abc'])
    });
    it('should return five values for three chars string', function () {
        const substringsGenerator = new SubstringsGenerator()
        expect(substringsGenerator.generate('abcd')).toEqual(['a', 'b', 'c', 'd', 'ab', 'bc', 'cd', 'abc', 'bcd', 'abcd'])
    });
});
