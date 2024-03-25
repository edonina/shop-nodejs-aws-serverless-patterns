import { errorResponse, successResponse } from "../../utils/apiResponseBuilder";
export const getProductsByIdHandler = (productService) => async (event, _context) => {
    try {
        const { productId = '' } = event.pathParameters;
        const product = await productService.getProductById(productId);
        if (!product) {
            return errorResponse({ name: '404', message: 'Product not found' }, 404);
        }
        return successResponse(product);
    }
    catch (error) {
        return errorResponse({ name: '500', message: 'Internal Error' }, 500);
    }
};
//# sourceMappingURL=handler.js.map