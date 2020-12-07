//ClassTest_1
//создать класс, в котором объявить несколько полей всех областей видимости (паблик, прайват, протектед) +

//ClassTest_2
//провести наследование от этого класса+

//Abstract and AbstractsExt
//провести наследование от другого абстрактного класса другому+

//ImplementedClass
//провести имплементирование от интерфейса+

//GenericClass and GenericExt
//создать дженерик класс с ограничением для разных параметров <T> и наследоваться от него, должны быть поля всех типов области видимости

//множественное наследование в тайпскрипте
//саморасширяющийся массив в тайпскрипте, дженерик, он не должен быть сделан на базе жс массива

import express from 'express'
import { AbstractExt } from './classes/AbstractsExt';
import { ClassTest_2 } from './classes/ClassTest_2';
import { GenericExt } from './classes/GenericExt';
import { ImplementedClass } from './classes/ImplementedClass';
import { ArrayStringClass } from './classes/ArrayString/ArrayStringClass'
import { ObjectArray } from './classes/ObjectArray';
import { Calculation } from './classes/calculation'
const port = 3002;
const app = express();
/*
const ClassTest_2_object: ClassTest_2 = new ClassTest_2();
const AbstractsExt_object: AbstractExt = new AbstractExt();
const ImplementedClass_object: ImplementedClass = new ImplementedClass();
const GenericExt_object: GenericExt = new GenericExt(new AbstractExt());

ClassTest_2_object.go2();
AbstractsExt_object.getProtected();
ImplementedClass_object.getProtected_interface();
GenericExt_object.logAll();
*/


const test = (a: number, b: number) => {
    return a + b;
}

const test2 = () => test(10, 20);
console.log(test2);//function
console.log(test2());//30


const arrayString =
new ArrayStringClass (
    `string1~string2~10~true~`, 
    `string~string~number~boolean~`,
);

const array = [1,4,5,6,2];
array[30] = 10;
array.push(12);
array.splice(3, 1);
console.log(array);

console.log(`Object array`);


const objectArray = new ObjectArray<number>();
objectArray[23] = 15;

objectArray.add(10);
objectArray.add(11);
console.log(objectArray[0]);
console.log(objectArray[23]);
objectArray.filter((element: number) => {
    if(element > 0) {
        return true;
    }
});
console.log(objectArray);


console.log(`Calculation percents`);

const calculationObject = new Calculation();
console.log(calculationObject.Calculate());

app.get('/', (request : any, response : any) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});

app.get('/services', (req, res) => {
     res.send('John')
})

// Start the server
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});