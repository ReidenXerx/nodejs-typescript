interface interfaceObjectArray<T> {
    [key: number]: T;
    add(element: T): void;
    remove(index: number): void;
    removeLast(): void;
    forEach(callback: Function): void;
    findIndex(searchElement: T): number;
}

export class ObjectArray<T> implements interfaceObjectArray<T> {
    private lastIndex: number = -1;
    public length: number = parseInt(Object.keys(this)[1]);
    [key: number]: T;

    public getLength(): number {
        let length = 0;
        
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key) && parseInt(key)) {
                length++;
            }
        }
        
        this.length = length;
        return this.length;
    }

    public getLast(): number {
        let max = -1;
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key) && parseInt(key) && key > max) {
                max = parseInt(key);
            }
        }
        this.lastIndex = max;
        return this.lastIndex;
    }

    public add(element: T) {
        this.getLast();
        this.getLength();
        this[++this.lastIndex] = element;
        this.length++;
    }

    public remove(index: number): void {
        this.getLength();
        if(this[index]) {
            this.length--;
            for (const key in this) {
                if (Object.prototype.hasOwnProperty.call(this, key) && parseInt(key) && key > index) {
                    this[parseInt(key) - 1] = this[parseInt(key)];
                    delete this[parseInt(key)];
                }
            }
        }
    }

    public removeLast(): void {
        this.getLength();
        this.getLast();
        delete this[this.lastIndex];
        this.length--;
        this.lastIndex--;
    }

    public forEach(callback: Function): void {
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                const element = this[key];
                callback(element);
            }
        }
    }
    
    public findIndex(searchElement: T): number {
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                const element = this[key];
                if (element === searchElement) {
                    return parseInt(key);
                }
            }
        }
        return -1;
    }

    public filter(callback: Function): ObjectArray<T> | null {
        const result: ObjectArray<T> = new ObjectArray();
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key) && parseInt(key)) {
                const element = this[parseInt(key)];
                if (callback(element)) {
                    result[parseInt(key)] = this[parseInt(key)];
                }
            }
        }
        return result ? result : null;
    }

    public map(callback: Function): ObjectArray<T> {
        const result: ObjectArray<T> = new ObjectArray();
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key) && parseInt(key)) {
                const element = this[parseInt(key)];
                result[parseInt(key)] = callback(element, parseInt(key));
            }
        }
        return result;
    }
}

//map, filter, индексаторы тайпскрипт для обращения через []
//интегрировать в сервер
//создать класс роутер, который будет оберткой апп гет, поизучать не только гет, но и аналоги
