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

.get("/", async ({productService}) => productService.getProducts(), {detail: detail})
.get("/:id", async ({productService, params}) => productService.getProduct(params.id), {detail: detail})
.post("/", async ({productService, body}) => productService.createProduct(body), {body: body, detail: detail})
.patch("/:id", async ({productService, body, params}) => productService.updateProduct(params.id, body), {body: body, detail: detail})
.delete("/:id", async ({productService, params}) => productService.deleteProduct(params.id), {detail: detail});

export default elysia;