const defaultHeaders = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
};
export const formatJSONResponse = (response) => {
    return {
        statusCode: 200,
        headers: {
            ...defaultHeaders
        },
        body: JSON.stringify(response)
    };
};
//# sourceMappingURL=api-gateway.js.map