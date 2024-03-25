import { winstonLogger } from "./winstonLogger";
const defaultHeaders = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
};
const errorResponse = (err, statusCode = 500) => {
    winstonLogger.logError(`Error: ${err.message}`);
    return {
        statusCode,
        headers: {
            ...defaultHeaders
        },
        body: JSON.stringify({ message: err.message || 'Something went wrong !!!' })
    };
};
const successResponse = (body, statusCode = 200) => {
    winstonLogger.logRequest(`Lambda successfully invoked and finished`);
    return {
        statusCode,
        headers: {
            ...defaultHeaders
        },
        body: JSON.stringify(body)
    };
};
export { errorResponse, successResponse };
//# sourceMappingURL=apiResponseBuilder.js.map