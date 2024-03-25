export default {
    handler: `src/functions/handlers.getProductList`,
    events: [
        {
            http: {
                method: 'get',
                path: 'products/{productId}',
                cors: true,
            },
        },
    ],
};
//# sourceMappingURL=index.js.map