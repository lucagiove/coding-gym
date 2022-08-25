class CaesarCipher {
    private readonly alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    private rotatedAlphabet: string[]

    constructor(private readonly key: number) {
        this.rotatedAlphabet = this.rotateAlphabet(key);
    }

    private rotateAlphabet(key: number) {
        let result = [...this.alphabet]
        for (let i = 0; i < key; i++) {
            result.push(result.shift()!)
        }
        return result
    }

    encrypt(stringToCipher: string) {
        let result: string = ''
        for (const char of stringToCipher) {
            result += this.encryptChar(char);
        }
        return result
    }

    private encryptChar(char: string) {
        let index = this.getAlphabetIndex(char.toLowerCase())
        if (index === null)
            return`${char}`

        if (isUpperCase(char))
            return `${(this.getRotatedChar(index)).toUpperCase()}`
        else
            return`${(this.getRotatedChar(index))}`

        function isUpperCase(char: string[1]) {
            return char === char.toUpperCase();
        }
    }

    private getAlphabetIndex(char: string) {
        const result = this.alphabet.findIndex(c => c === char);
        if (result === -1)
            return null
        else
            return result
    }

    private getRotatedChar(index: number) {
        return this.rotatedAlphabet[index];
    }
}

describe('CaesarCipher', function () {
    it('should encrypt lowercase letters', function () {
        const caesarCipher = new CaesarCipher(2)
        expect(caesarCipher.encrypt('middle')).toEqual('okffng')
    });
    it('should encrypt mixed upper and lower letters', function () {
        const caesarCipher = new CaesarCipher(2)
        expect(caesarCipher.encrypt('Outz')).toEqual('Qwvb')
    });
    it('should skip non letter characters', function () {
        const caesarCipher = new CaesarCipher(2)
        expect(caesarCipher.encrypt('middle-Outz-1')).toEqual('okffng-Qwvb-1')
    });
    it('should properly encrypt test case 1', function () {
        const caesarCipher = new CaesarCipher(5)
        expect(caesarCipher.encrypt('Always-Look-on-the-Bright-Side-of-Life')).toEqual('Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj')
    });
});