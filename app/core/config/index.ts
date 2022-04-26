export class ConfigurationCore {
    public static readonly PORT_DEVELOPMENT: number = +process.env.PORT_DEVELOPMENT || 8080;
    public static readonly PORT_PRODUCTION: number = +process.env.PORT_PRODUCTION || 8081;

    public static IS_DEVELOPMENT: boolean = false;
    public static IS_PRODUCTION: boolean = false;
}