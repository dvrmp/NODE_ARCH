import { Server, createServer } from 'http';
import { ConfigurationCore } from '../config';
import { dependeciesContainer } from '../container';
import { SCOPE } from '../utils/logger/logger-scopes.enum';
import { LoggerConsole } from '../utils/logger/loggerConsole';
import { expressApplication } from './express';

export class ServerCore {

    private httpServer: Server = null;

    private loggerConsole: LoggerConsole;

    constructor() { 
        this.loggerConsole = dependeciesContainer.resolve<LoggerConsole>(LoggerConsole);
    }

    public initializeAsDevelopment(): void {
        try {
            this.httpServer = createServer(expressApplication);
            this.httpServer.listen(ConfigurationCore.PORT_DEVELOPMENT);
            this.httpServer.on('listening', () => {
                this.loggerConsole.writeMessageDebug(SCOPE.SERVER, `SERVER RUNNING ON DEVELPMENT [${ConfigurationCore.PORT_DEVELOPMENT}]`);
            });
        } catch (error) {
            this.loggerConsole.writeMessageDebug(SCOPE.SERVER, (error as Error).message);
        }
    }

    public initializeAsProduction(): void {
        //TODO: Prepare server for https
        throw new Error("Method not implemented.");
    }
}                 