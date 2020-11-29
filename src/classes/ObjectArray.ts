export class ObjectArray<T> {
    private values!: { [key: number]: T; };//!
    private lastIndex: number = -1;

    public constructor() {
        this.values = {};
    }

    public length():number {
        return Object.keys(this.values).length;
    };

    public add(element: T): void {
        this.values[this.lastIndex] = element;
    };

    public remove(index: number): void {
        delete this.values[index];
    }

    public forEach(callback: Function): void {
        for (const key in this.values) {
            if (Object.prototype.hasOwnProperty.call(this.values, key)) {
                const element = this.values[key];
                callback(element);
            }
        }
    };

    public get(index: number): T {
        return this.values[index];
    };

    public set(element: T) {
        this.lastIndex++;
        this.values[this.lastIndex] = element;
    };

    public find(searchElement: T): number {
        for (const key in this.values) {
            if (Object.prototype.hasOwnProperty.call(this.values, key)) {
                const element = this.values[key];
                if(element === searchElement) {
                    return parseInt(key);
                }
            }
        }
        return -1;
    };
}