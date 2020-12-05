export class ObjectArray<T> {
  private values!: { [key: number]: T }; //!
  private lastIndex: number = -1;
  private length: number = 0;

  public constructor() {
    this.values = {};
  }

  // public length():number {
  //     return Object.keys(this.values).length;
  // };

  public add(element: T) {
    this.values[++this.lastIndex] = element;
    this.length++;
  }

  public remove(index: number): void {
    delete this.values[index];
    this.length--;
    //смещение
  }

  public removeLast(index: number): void {
    delete this.values[index];
    this.length--;
    this.lastIndex--;
    //смещение
  }

  public forEach(callback: Function): void {
    for (const key in this.values) {
      if (Object.prototype.hasOwnProperty.call(this.values, key)) {
        const element = this.values[key];
        callback(element);
      }
    }
  }

  public get(index: number): T {
    return this.values[index];
  }

  public set(element: T, index: number): void {
    if (index > 0) {
      this.values[index] = element;
    }
  }
  public findIndex(searchElement: T): number {
    for (const key in this.values) {
      if (Object.prototype.hasOwnProperty.call(this.values, key)) {
        const element = this.values[key];
        if (element === searchElement) {
          return parseInt(key);
        }
      }
    }
    return -1;
  }

  public find(searchElement: T): T | null {
    for (const key in this.values) {
      if (Object.prototype.hasOwnProperty.call(this.values, key)) {
        const element = this.values[key];
        if (element === searchElement) {
          return this.values[key];
        }
      }
    }
    return null;
  }
}

//map, filter, индексаторы тайпскрипт для обращения через []
//интегрировать в сервер
//создать класс роутер, который будет оберткой апп гет, поизучать не только гет, но и аналоги