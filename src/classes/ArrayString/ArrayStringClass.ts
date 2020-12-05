import { throws } from "assert";

interface ObjectValue {
    value: string,
    type: string,
    indexV: number,
    indexT: number,
}

export class ArrayStringClass {
    private values: string = '';
    private types: string = '';
    private length: number = 0;
    /*
    private restrictedTypes: {
        string: any, number: any, boolean: any,
    }*/
    constructor(values: string, types: string) {
        this.values = this.values.concat(values);
        this.types = this.types.concat(types);
        this.getLength();
    }

    public getLength(): number {
        if(!this.length) {
            let currentIndex: number = 0;
            let newIndex: number = 0;
            while(newIndex !== -1) {
                currentIndex = newIndex;
                this.length++;
                newIndex = this.values.indexOf('~', currentIndex + 1);
            }
            this.length--;
        }
        return this.length;
    }

    private slice(index: number, target: string) {
        //console.log('slice');
        
        //console.log(target.slice(index + 1, target.indexOf('~', index + 1)));
        
        //return target.slice(index + 1, target.indexOf('~', index + 1) === -1 ? undefined : target.indexOf('~', index + 1))
        return target.slice(index === 0 ? index: index + 1, target.indexOf('~', index + 1));
    }
    
    private getObject(indexNeeded: number): ObjectValue | null {
        let value;
        let type;
        let indexV;
        let indexT;
        for (let index = 0, indexElements = 0; index < this.values.length; index++) {
            
            
            if(this.values.charAt(index) === '~') {
                //console.log(`indexElements ${indexElements}`);
                
                indexElements++;
            }
            if(indexElements === indexNeeded) {
                value = this.slice(index, this.values);
                //console.log(`value ${value}`);
                indexV = index + 1;
                break;
            }
        }
        if(!value) {
            return null;
        }
        for (let index = 0, indexElements = 0; index < this.types.length; index++) {
            if(this.types.charAt(index) === '~') {
                indexElements++;
            }
            if(indexElements === indexNeeded) {
                type = this.slice(index, this.types);
                //console.log(type);
                indexT = index + 1;
                break;
            }
        }
        if(!type) {
            return null;
        }
        return { 
            value: value,
            type: type,
            indexV: indexV,
            indexT: indexT,
        } as ObjectValue;
    }

    public get(indexNeeded: number): string | number | boolean | null {
        const result = this.getObject(indexNeeded);
        if(!result) {
            return null;
        }
        if(result?.type === 'number') {
            return Number(result.value);
        } else if(result.type === 'boolean') {
            return Boolean(result.value);
        } else {
            return result.value;
        }
    }

    public definitelyNotForEach(callback: Function): boolean | Error {
        try {
            for (let index = 0; index < this.length; index++) {
                callback(this.get(index));
            }    
            return true;
        } catch (error) {
            return error;
        }
    }
    
    public add(element: string | number | boolean): void {
        this.values = this.values.concat(`${JSON.stringify(element)}~`);
        this.types = this.types.concat(`${typeof(element)}~`);
        this.length++;
    }
    
    public remove(indexNeeded: number): boolean | Error {
        const removingObject: ObjectValue | null = this.getObject(indexNeeded);
        if(!removingObject) {
            return Error('Removing object doesnt exist');
        } else {
            try {
                this.values = String.prototype.concat(
                    this.values.substr(0, removingObject.indexV),
                    this.values.substr(removingObject.indexV + removingObject.value.length + 1),
                );
    
                this.types = String.prototype.concat(
                    this.types.substr(0, removingObject.indexT),
                    this.types.substr(removingObject.indexT + removingObject.type.length + 1),
                );
                this.length--;
                return true;
            } catch(error) {
                return error;
            }
        }
    }
}