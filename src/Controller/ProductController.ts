import { Elysia, t } from "elysia";
import ProductService from "../Service/Services/ProductService";

const detail = {
      tags: ['Product']
    };

const body = t.Object({
    ProductName: t.String(),
    Price: t.Number(),
    ImgUrl: t.String(),
    Description: t.String(),
});

const elysia = new Elysia();
elysia.decorate('productService', new ProductService())
.guard({detail: detail}, app => app    
    .get("/", async ({productService}) => productService.getProducts())
    .get("/:id", async ({productService, params}) => productService.getProduct(params.id))
    .delete("/:id", async ({productService, params}) => productService.deleteProduct(params.id)))
.guard({body: body, detail: detail}, app => app 
    .post("/", async ({productService, body}) => productService.createProduct(body))
    .patch("/:id", async ({productService, body, params}) => productService.updateProduct(params.id, body)));

export default elysia;