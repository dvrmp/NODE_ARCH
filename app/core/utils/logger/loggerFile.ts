import { injectable } from "inversify";
import { ConfigurationCore } from "../../config";
import { SCOPE } from "./logger-scopes.enum";
import winston from "winston";
import path from "path";

@injectable()
export class LoggerFile {

    private readonly DEFAULT_PATH_DEVELOPMENT: string = path.join(__dirname, '../../../logs/development/');
    private readonly DEFAULT_PATH_PRODUCTION: string = path.join(__dirname, '../../../logs/production/');
    private logger: winston.Logger;

    public writeMessageDebug(scope: SCOPE, message: string): void {
        this.configure();
        this.logger.log('debug', `[${scope}]:${message}`);
    }

    public writeMessageError(scope: SCOPE, message: string): void {
        this.configure();
        this.logger.log('error', `[${scope}]:${message}`);
    }

    private configure(): void { return ConfigurationCore.IS_DEVELOPMENT ? this.configureForDevelopment() : this.ConfigureForProduction() }

    private configureForDevelopment(): void {
        this.logger = winston.createLogger({
            level: 'debug',
            transports: [
                new winston.transports.File({ filename: `${this.DEFAULT_PATH_DEVELOPMENT}/development.log` })
            ]
        });
    }

    private ConfigureForProduction(): void {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.File({ filename: this.DEFAULT_PATH_PRODUCTION })
            ]
        });
    }
}