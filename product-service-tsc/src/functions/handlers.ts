import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { getProductsByIdHandler } from '@functions/getProductsById/handler';
import { getProductsListHandler } from '@functions/getProductsList/handler';
import { createProductHandler } from '@functions/createProduct/handler';
import { ProductService } from '../services/product-service';
import { StockService } from '../services/stock-service';
import { catalogBatchProcessHandler } from "@functions/catalogBatchProcess/handler";

const client = new DynamoDBClient();
export const productService = new ProductService(client);
export const stockService = new StockService(client);

export const getProductsById = getProductsByIdHandler(productService);
export const getProductsList = getProductsListHandler(productService);
export const createProduct = createProductHandler(productService);
export const catalogBatchProcess = catalogBatchProcessHandler(productService);
