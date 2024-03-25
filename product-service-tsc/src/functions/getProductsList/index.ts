export default {
  // handler: `${handlerPath(__dirname)}/handler.main`,
  handler: `src/functions/handlers.getProductsList`,
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