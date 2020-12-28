import express, { Express, response } from 'express'
import { Server, createServer } from 'http';
import  { parse, UrlWithParsedQuery } from 'url';
import { Type } from 'typescript';
import { ObjectArray } from './ObjectArray'
import { inter, RouteObject } from './routeObject';
import { ParsedUrlQuery } from 'querystring';

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

export class RouterNodeJs {
    public objectArray: ObjectArray<number> = new ObjectArray<number>();
    private port: number;
    private restrictedRoutes: Array<RouteObject> = [];

    public constructor(port: number) {
        this.port = port;
    }

    public addRoute({
        path,
        callback,
    }: inter) {
        this.restrictedRoutes.push(
            new RouteObject({ path, callback }),
        );
    }

    public startServer() {
        createServer((request, response) => {
            const url = request.url;
            console.log(url);
            
            let urlObject: UrlWithParsedQuery | null = null;
            let query: ParsedUrlQuery;
            if(url) {
                urlObject = parse(url, true);
                query = urlObject.query;
            }
            
             if(urlObject?.pathname && query!) {
                let forReturn;
                this.restrictedRoutes.filter((route: RouteObject) => {
                    if(route.Path === urlObject?.pathname) {
                        console.log(query);
                        forReturn = route.Callback(query)
                    }
                });
                response.write(
                    JSON.stringify(
                        forReturn
                    )
                );
                response.end();
            }

            else if(urlObject?.pathname ==='/add' && query!) {
                this.objectArray.add(query!.keyOne as any);
                console.log(this.objectArray);
                
                response.write(
                    JSON.stringify(
                        this.objectArray
                    )
                );
                response.end();
            }

            else {
                response.write('Hello World'); 
                response.end();
            }
        }).listen(this.port, () => {
            console.log(`Example nodejs app listening at http://localhost:${this.port}`);
        })
    }
}