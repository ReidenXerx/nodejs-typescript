import express, { Express } from 'express'
import { Server } from 'http';
import { Type } from 'typescript';
import { ObjectArray } from './ObjectArray'

export default class Router {
    private port: number;
    private app: Express = express();
    private server: Object = {};

    public constructor(port: number) {
        this.port = port;
    }

    public startServer() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
    }

    public addRoute(route: string, callback: Function) {
        this.app.get(route, (request : any, response : any) => {
            callback(request, response);
        });
    }
}

export class RouterArray<T> extends Router {
    public objectArray: ObjectArray<T> = new ObjectArray<T>();
    
    public constructor(port: number) {
        super(port);
    }
    
    public addElement(): void {
        this.addRoute(`/add`, (request: any, response: any) => {
            this.objectArray.add(request.query.element);
            response.send(this.objectArray);
        });
    }

    public setElement(): void {
        this.addRoute(`/set`, (request: any, response: any) => {
            this.objectArray[request.query.index] = request.query.element;
            response.send(this.objectArray);
        });
    }
}