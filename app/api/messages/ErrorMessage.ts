import { StatusCodes } from 'http-status-codes';

export class ErrorMesssage extends Error {
    public statusCode: number;
    public datetime: Date;
    public route?: string;
    
    constructor(message: string, statusCode: StatusCodes, route?: string) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.datetime = new Date();
        this.route = route;
    }
}