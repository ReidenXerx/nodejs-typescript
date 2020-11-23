import { Abstract } from "./Abstract";

export class GenericNumber<T extends Abstract> {
    protected zeroValue: T;
    public valueS: string = 'text';
    public valueN: number = 10;
    public valueB: boolean = true;
    private getZero<T>() {
        const useless: Array<Abstract> = [];// Abstract частный случай Т
        useless.push(this.zeroValue)
        return this.zeroValue;
    }
    constructor(zeroValue: T) {
        this.zeroValue = zeroValue;
    }
}