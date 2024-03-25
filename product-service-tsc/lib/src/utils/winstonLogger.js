import winston from 'winston';
class WinstonLogger {
    constructor() {
        this.format = winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.align(), winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`));
        this.logger = winston.createLogger({
            level: process.env.ENV_STAGE === 'prod' ? 'error' : 'info',
            transports: [
                new winston.transports.Console({
                    format: this.format
                })
            ]
        });
    }
    logRequest(message) {
        this.logger.info(message);
    }
    logError(message) {
        this.logger.error(message);
    }
}
const winstonLogger = new WinstonLogger();
export { winstonLogger };
//# sourceMappingURL=winstonLogger.js.map