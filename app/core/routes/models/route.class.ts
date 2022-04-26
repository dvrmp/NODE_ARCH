import { MIDDLEWARE_ENUM } from "../../../core/enums/middlewares.enum";
import { MODULES_ENUM } from "../../../core/enums/modules.enum";
import { IRoute } from "../interfaces/route.interface";
export const LIST_ROUTES: IRoute[] = [];

export function setRoute (route: IRoute): void  { LIST_ROUTES.push(route) };
export function getRoutes(): IRoute[] {return LIST_ROUTES};

export class Route {
    public uri: string;
    public method: string;
    public module: string;
    public controller: string;
    public middleware: string;

    constructor(method: 'GET' | 'POST' | 'PUT', uri: string, module: MODULES_ENUM, controller: string, middleware: MIDDLEWARE_ENUM) {
        this.uri = uri;
        this.method = method;
        this.module = module;
        this.controller = controller;
        this.middleware = middleware;
        this.save();
    }

    private save(){
        setRoute({
            URI: this.uri,
            METHOD: this.method,
            MODULE: this.module,
            CONTROLLER: this.controller,
            MIDDLEWARE: this.middleware,
        })
    }
}
