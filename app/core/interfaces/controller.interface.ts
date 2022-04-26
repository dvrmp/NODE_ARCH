import { Request, Response } from 'express';
import { injectable } from 'inversify';

@injectable()
export abstract class Controller {

    protected request: Request;
    protected response: Response;


    public setHandlers(request: Request, response: Response) {
        this.request = request;
        this.response = response;
    }

}