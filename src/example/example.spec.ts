import {Example} from "./example";

describe('example', function () {
    it('should be defined', function () {
        const example = new Example();
        expect(example).toBeDefined()
    });
});
