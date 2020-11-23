import { AbstractExt } from "./AbstractsExt";
import { GenericNumber } from "./GenericClass";

export class GenericExt extends GenericNumber<AbstractExt> {
    constructor(zeroValue : AbstractExt) {
        super(zeroValue);
    }
    public logAll() {
        console.log(`logAll function`);
        console.log(this.zeroValue);
        console.log(this.valueS);
        console.log(this.valueB);
        console.log(this.valueN);
    }
} 