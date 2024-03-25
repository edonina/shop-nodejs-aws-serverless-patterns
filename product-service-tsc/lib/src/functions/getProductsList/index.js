import { handlerPath } from '@libs/handler-resolver';
console.log('`handlers.${handlerPath(__dirname)}`:::::::', `handlers.${handlerPath(__dirname)}`);
console.log('`handlers.${handlerPath(__dirname)}`:::::::', `${handlerPath(__dirname)}/handler.main`);
export default {
    handler: `src/functions/handlers.getProductList`,
    events: [
        {
            http: {
                method: 'get',
                path: 'products',
                cors: true,
            },
        },
    ],
};
//# sourceMappingURL=index.js.map