export interface inter {
    path: string,
    callback: Function,
}

export class RouteObject {
    private path: string;
    private callback: Function;

    public constructor(
    {
        path,
        callback,
    }: inter) {
        this.path = path;
        this.callback = callback;
    }

    get Path() {
        return this.path;
    }

    get Callback() {
        return this.callback;
    }

    set Callback(callback: Function) {
        this.Callback = callback;
    }
}