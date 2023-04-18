class TwoStackQueue {
    private inputStack: number[] = []
    private outputStack: number[] = []

    enqueue(element: number) {
        this.inputStack.push(element)
    }

    dequeue() {
        this.reverseInputIfNeeded();
        return this.outputStack.pop();
    }

    print() {
        this.reverseInputIfNeeded()
        return this.outputStack[this.outputStack.length - 1];
    }

    private reverseInputIfNeeded() {
        if (!this.outputStack.length) {
            this.reverseInputToOutput()
        }
    }

    private reverseInputToOutput() {
        while(this.inputStack.length !== 0) {
            this.outputStack.push(this.inputStack.pop()!) // I can force it's not undefined since
                                                          // it's guaranteed by problem constraints
        }
    }
}

function stringToQueue(input: string, queue: TwoStackQueue) {
    const query = Number(input.split(' ')[0])
    const value = Number(input.split(' ')[1])
    switch (query) {
        case 1:
            queue.enqueue(value)
            break
        case 2:
            queue.dequeue()
            break
        case 3:
            return queue.print()
    }
}

describe('TwoStackQueue', function () {
    it('should add element and print it', function () {
        const queue = new TwoStackQueue()
        queue.enqueue(1)
        expect(queue.print()).toEqual(1)
    });
    it('should add element and return it', function () {
        const queue = new TwoStackQueue()
        queue.enqueue(1)
        expect(queue.dequeue()).toEqual(1)
        expect(queue.print()).toEqual(undefined)
    });
    it('should add two element element and return the first one', function () {
        const queue = new TwoStackQueue()
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.dequeue()).toEqual(1)
    });
    it('should add two element element and return the first one, then the second', function () {
        const queue = new TwoStackQueue()
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.dequeue()).toEqual(1)
        expect(queue.dequeue()).toEqual(2)
    });
    it('should add two element element and return the first one, add the third then return the second and third', function () {
        const queue = new TwoStackQueue()
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.dequeue()).toEqual(1)
        queue.enqueue(3)
        expect(queue.dequeue()).toEqual(2)
        expect(queue.dequeue()).toEqual(3)
    });
});

describe('StringToQueue', function () {
    it('should add and remove and print twice 14', function () {
        const queue = new TwoStackQueue()
        const allInput = ["10", "1 42", "2", "1 14", "3", "1 28", "3", "1 60", "1 78", "2", "2"]
        const expected: number[] = []
        for (const input of allInput) {
            const result = stringToQueue(input, queue)
            if(result) expected.push(result)
        }
        expect(expected).toEqual([14, 14])
    });
});