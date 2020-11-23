import { ClassTest_1 } from './ClassTest_1';


export class ClassTest_2 extends ClassTest_1 {
    public public_attribute2: string = 'public_attribute2'

    public go2() {
        console.log('go2');
        this.go_interface();
    }
}