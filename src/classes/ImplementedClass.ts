import { IClassInterface } from "../interfaces/basicInterfaces";

export class ImplementedClass implements IClassInterface {
    protected_attribute: number = 0
    public_attribute: string = 'i am absctract class'

    getProtected(): number {
        console.log('Protected');
        return this.protected_attribute;
    }
    getProtected_interface() {
        console.log(`getProtected_interface method, protected field - ${this.getProtected()}`);
    }
}