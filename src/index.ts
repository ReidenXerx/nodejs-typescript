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

const arrayString =
new ArrayStringClass (
    `string1~string2~10~true~`, 
    `string~string~number~boolean~`,
);

console.log(`${arrayString.get(0)} type - ${typeof(arrayString.get(0))}`);
console.log(arrayString);

console.log(`${arrayString.get(3)} type - ${typeof(arrayString.get(3))}`);
console.log(arrayString);
arrayString.add(15);

console.log(`${arrayString.get(3)} type - ${typeof(arrayString.get(3))}`);
console.log(arrayString);

arrayString.definitelyNotForEach((element: string | number | boolean) => {
    console.log(`element is ${element} type is ${typeof(element)}`);
});

arrayString.remove(4);
console.log(arrayString);

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