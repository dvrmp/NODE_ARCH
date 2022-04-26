import 'colors';
import { injectable } from 'inversify';
import { SCOPE } from './logger-scopes.enum';

@injectable()
export class LoggerConsole {

    public writeMessageDebug(scope: SCOPE, message: string): void {
        const level: string = 'DEBUG';
        console.log('================================================================================'.green);
        console.log(`[${new Date().toLocaleDateString()}][${level.blue}][${scope}] : ${message}`);
        console.log('================================================================================'.green);
    }

    public writeMessageError(scope: SCOPE, message: string): void {
        const level: string = 'ERROR';
        console.log('================================================================================'.red);
        console.log(`[${new Date()}]`);
        console.log(`[${level.red}][${scope}] : ${message}`);
        console.log('================================================================================'.red);
    }
}