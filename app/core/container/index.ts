import { Container } from 'inversify';
import { IOC_TYPES } from './ioc-types';
import { LoggerConsole } from '../utils/logger/loggerConsole';
import { LoggerFile } from '../utils/logger/loggerFile';
import { AuthenticationController } from '../../modules/authentication/controllers/authenticationController';
import { AuthenticationRepository } from '../../modules/authentication/repositories/authenticationRepository';

const dependeciesContainer: Container = new Container();

dependeciesContainer.bind<LoggerConsole>(IOC_TYPES.LoggerConsole).to(LoggerConsole).inSingletonScope();
dependeciesContainer.bind<LoggerFile>(IOC_TYPES.LoggerFile).to(LoggerFile).inSingletonScope();

//===============================================================================================
//  AUTHTENTICATION MODULE
//===============================================================================================
dependeciesContainer.bind<AuthenticationController>(IOC_TYPES.AuthenticationController).to(AuthenticationController).inTransientScope();
dependeciesContainer.bind<AuthenticationRepository>(IOC_TYPES.AuthenticationRepository).to(AuthenticationRepository).inTransientScope();


export { dependeciesContainer }