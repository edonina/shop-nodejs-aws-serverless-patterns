import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
const hello = async () => {
    return formatJSONResponse({
        productName: 'Pattern 1 TSC',
        price: 123,
    });
};
export const main = middyfy(hello);
//# sourceMappingURL=handler.js.map