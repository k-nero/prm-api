interface ProductModel {
    ProductName: string;
    Price: number;
    Description: string;
    ImgUrl: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
}

interface IProductService {
    createProduct(product: ProductModel): Promise<any>;
    updateProduct(id: string, product: ProductModel): Promise<any>;
    deleteProduct(productId: string): Promise<any>;
    getProduct(productId: string): Promise<any>;
    getProducts(): Promise<any[]>;
}

export { ProductModel, IProductService };