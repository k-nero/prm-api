import { ProductModel,IProductService } from "../Service.Contract/IProduct";
import db from "../../Repository/DbContext";
import { eq } from "drizzle-orm";
import { Product } from "../../Repository/Entities/Product";

class ProductService implements IProductService
{
    async createProduct(product: ProductModel): Promise<any> 
    {
        product.CreatedAt = new Date();
        var result = await db.insert(Product).values(product).returning().get();
        return result.Id;
    }
    async updateProduct(id: string, product: ProductModel): Promise<any> 
    {
        product.UpdatedAt = new Date();
        var result = await db.update(Product).set(product).where(eq(Product.Id, id)).execute();
        return result.rowsAffected;
    }
    async deleteProduct(productId: string): Promise<any> 
    {
        var result = await db.delete(Product).where(eq(Product.Id, productId)).execute();
        return result.rowsAffected;
    }
    async getProduct(productId: string): Promise<any> 
    {
        var result = await db.query.Product.findFirst({
            where: eq(Product.Id, productId)
        }).execute();
        return result;
    }
    async getProducts(): Promise<any[]> 
    {
        var result = await db.query.Product.findMany().execute();
        return result;
    }   
}

export default ProductService;