import { RomanNumbersConverter } from './roman-numbers-converter'

describe('romanNumbersCalculator', function () {
  let roman: RomanNumbersConverter
  beforeEach(function () {
    roman = new RomanNumbersConverter()
  })
  it('should return I for 1', function () {
    expect(roman.convert(1)).toEqual('I')
  })
  it('should return III for 3', function () {
    expect(roman.convert(3)).toEqual('III')
  })
  it('should return IV for 4', function () {
    expect(roman.convert(4)).toEqual('IV')
  })
  it('should return V for 5', function () {
    expect(roman.convert(5)).toEqual('V')
  })
  it('should return VII for 7', function () {
    expect(roman.convert(7)).toEqual('VII')
  })
  it('should return IX for 9', function () {
    expect(roman.convert(9)).toEqual('IX')
  })
  it('should return X for 10', function () {
    expect(roman.convert(10)).toEqual('X')
  })
  it('should return XI for 11', function () {
    expect(roman.convert(11)).toEqual('XI')
  })
  it('should return XVI for 16', function () {
    expect(roman.convert(16)).toEqual('XVI')
  })
  it('should return LXX for 70', function () {
    expect(roman.convert(70)).toEqual('LXX')
  })

  it('should return XXIII for 23', function () {
    expect(roman.convert(23)).toEqual('XXIII')
  })
  it('should return XXIV for 24', function () {
    expect(roman.convert(24)).toEqual('XXIV')
  })
  it('should return L for 50', function () {
    expect(roman.convert(50)).toEqual('L')
  })
  it('should return LIV for 54', function () {
    expect(roman.convert(54)).toEqual('LIV')
  })
  it('should return LIX for 59', function () {
    expect(roman.convert(59)).toEqual('LIX')
  })
  it('should return C for 100', function () {
    expect(roman.convert(100)).toEqual('C')
  })
  it('should return M for 1000', function () {
    expect(roman.convert(1000)).toEqual('M')
  })
  it('should return CXXXIX for 139', function () {
    expect(roman.convert(139)).toEqual('CXXXIX')
  })
})
