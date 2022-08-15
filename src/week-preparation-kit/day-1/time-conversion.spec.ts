class TimeConversion {
    convert(input: string) {
        let hours = input.split(':')[0]
        const minutes = input.split(':')[1]
        const seconds = input.split(':')[2].slice(0, 2)
        const ampm = input.slice(8, 10)
        if (hours === '12') {
            if (ampm === 'AM')
                hours = '00'
        }
        else if (ampm === 'PM')
                hours = String(Number(hours) + 12)

        return `${hours}:${minutes}:${seconds}`;
    }
}

describe('TimeConversion', function () {
    const timeConversion = new TimeConversion()
    it('should convert 7PM to 19', function () {
        expect(timeConversion.convert('07:05:45PM')).toEqual('19:05:45')
    });
    it('should convert 12PM to 12 midday', function () {
        expect(timeConversion.convert('12:00:01PM')).toEqual('12:00:01')
    });
    it('should convert 12AM to 0 midnight', function () {
        expect(timeConversion.convert('12:00:01AM')).toEqual('00:00:01')
    });
});