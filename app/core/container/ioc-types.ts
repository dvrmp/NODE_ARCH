const IOC_TYPES = {
    //CORE
    LoggerConsole: Symbol.for("LoggerConsole"),
    LoggerFile: Symbol.for('LoggerFile'),
    Controller: Symbol.for('Controller'),
    //AUTHENTICATION MODULE
    AuthenticationController: Symbol.for('AuthenticationController'),
    AuthenticationRepository: Symbol.for('AuthenticationRepository')
};

export { IOC_TYPES };