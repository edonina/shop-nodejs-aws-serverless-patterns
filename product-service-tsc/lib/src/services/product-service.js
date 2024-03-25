import products from './products.json';
class ProductService {
    getProductById(id) {
        return Promise.resolve(products.find(product => product.id === id));
    }
    getAllProducts() {
        return Promise.resolve(products);
    }
}
export { ProductService };
//# sourceMappingURL=product-service.js.map