import { AttributeValue, TransactWriteItem } from "@aws-sdk/client-dynamodb";
export interface ProductInterface {
    id: string;
    title: string
    description: string;
    price: number;
};

export interface ProductServiceInterface {
    getProductById: (id: string) => Promise<ProductInterface>,
    getAllProducts: () => Promise<ProductInterface[]>,
    createProduct: (product: ProductInterface, stock: any) => Promise<ProductInterface>,
}

export interface StockServiceInterface {
    getCreateStockTranskItem: (stock: StockInterface) => TransactWriteItem,
    getStockByProductId: (productId: string) => Promise<StockInterface[]>,
    getStocks: () => Promise<StockInterface[]>,
}

export interface StockInterface {
    productId: any;
    count: any;
  };
  