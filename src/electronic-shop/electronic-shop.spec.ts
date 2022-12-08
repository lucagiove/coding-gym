import {testCase15Data} from "./testcase-15";
import {testCase14Data} from "./testcase-14";

class ElectronicShop {
    private readonly sortedKeyboards: number[];
    private readonly sortedUsbDrives: number[]

    constructor(private budget: number, private keyboards: number[], private usbDrives: number[]) {
        this.sortedKeyboards = [...this.keyboards.sort().reverse()]
        this.sortedUsbDrives = [...this.usbDrives.sort()]
    }

    compute() {
        const possibleChoices: number[] = []

        for (const keyboard of this.sortedKeyboards) {
            for (const usbDrive of this.sortedUsbDrives) {
                if (keyboard + usbDrive <= this.budget) {
                    possibleChoices.push(keyboard + usbDrive)
                } else {
                    break
                }
            }
        }
        if (possibleChoices.length == 0) {
            return -1
        }
        return Math.max(...possibleChoices)
    }
}

describe('ElectronicShop', function () {
    it('should return -1 if both items cannot be bought', function () {
        const shop = new ElectronicShop(5, [6], [7])
        expect(shop.compute()).toEqual(-1)
    });
    it('should return the budget if the sum of the devices equals the budget', function () {
        const shop = new ElectronicShop(10, [5], [5])
        expect(shop.compute()).toEqual(10)
    });
    it('should return the keyboard and highest usb drive', function () {
        const shop = new ElectronicShop(10, [5], [1, 5, 3, 8])
        expect(shop.compute()).toEqual(10)
    });
    it('should return the second value if max is acceptable not best option', function () {
        const shop = new ElectronicShop(10, [9, 2, 1], [2, 8, 5, 9])
        expect(shop.compute()).toEqual(10)
    })
    it('should pass test case 15 data set', function () {
        const shop = new ElectronicShop(testCase14Data.budget, testCase14Data.keyboards, testCase14Data.usbDrives)
        expect(shop.compute()).toEqual(729580)
    });
    it('should pass test case 15 data set', function () {
        const shop = new ElectronicShop(testCase15Data.budget, testCase15Data.keyboards, testCase15Data.usbDrives)
        expect(shop.compute()).toEqual(-1)
    });
});