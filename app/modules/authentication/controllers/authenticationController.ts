import { StatusCodes } from "http-status-codes";
import { inject, injectable } from "inversify";
import { ErrorMesssage } from "../../../api/messages/ErrorMessage";
import { IOC_TYPES } from "../../../core/container/ioc-types";
import { Controller } from "../../../core/interfaces/controller.interface";
import { SCOPE } from "../../../core/utils/logger/logger-scopes.enum";
import { LoggerFile } from "../../../core/utils/logger/loggerFile";


@injectable()
export class AuthenticationController extends Controller {

    constructor(@inject(IOC_TYPES.LoggerFile) private readonly loggerFile: LoggerFile){
        super()
    }

    public async register(): Promise<void> {
        this.loggerFile.writeMessageDebug(SCOPE.AUTHENTICATION, 'SERVER CONTROLLER REQUEST TEST');
        if(6>5){
            throw new ErrorMesssage('Method not implemented.',StatusCodes.NOT_FOUND);
        }
    }
}
