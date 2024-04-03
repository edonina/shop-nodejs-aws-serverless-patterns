import { errorResponse, successResponse } from '../../utils/apiResponseBuilder';
import { ProductServiceInterface, StockInterface } from '../../services/products';
import { stockService } from "@functions/handlers";

export const getProductsByIdHandler = (productService: ProductServiceInterface) => async (event, _context) => {
  console.log('event', event);
  try {
    const { productId = '' } = event.pathParameters;
    const product = await productService.getProductById(productId);
    const stocks: StockInterface[] = await stockService.getStockByProductId(productId);

    if (!product) {
      return errorResponse({name: '404', message: 'Product not found'}, 404);
    }
    return successResponse({ ...product, count: stocks?.length > 0 ? stocks[0].count : 0 });
  } catch (error) {
    return errorResponse({name: '500', message: 'Internal Error'}, 500);
  }
};
