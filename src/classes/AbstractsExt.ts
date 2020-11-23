import { Abstract } from './Abstract';


export class AbstractExt extends Abstract {
    public public_attribute2: string = 'public_attribute2';
    protected_attribute = 10;

    public getProtected(): number {
        console.log(`Protected attribute from abstract class is ${this.protected_attribute}`);
        return this.protected_attribute;
    }
}