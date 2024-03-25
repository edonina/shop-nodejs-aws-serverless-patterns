import { errorResponse, successResponse } from '../../utils/apiResponseBuilder';
export const getProductsListHandler = (productService) => async () => {
    try {
        const products = await productService.getAllProducts();
        return successResponse(products);
    }
    catch (error) {
        return errorResponse(error, 500);
    }
};
//# sourceMappingURL=handler.js.map