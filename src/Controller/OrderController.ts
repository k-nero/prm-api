import { Elysia, t } from "elysia";
import OrderService from "../Service/Services/OrderService";

const body = t.Object({
    ShipFee: t.Number(),
    TotalPrice: t.Number(),
    Address: t.String(),
    IsPaid: t.Boolean(),
    AccountId: t.String()
});

const detail = {
        tags: ['Order']
        };

const elysia = new Elysia();
elysia.decorate('orderService', new OrderService());

elysia.get("/", async ({orderService}) => orderService.getOrders(), {detail: detail});
elysia.get("/:id", async ({orderService, params}) => orderService.getOrder(params.id), {detail: detail});
elysia.post("/", async ({orderService, body}) => orderService.createOrder(body), {body: body, detail: detail});
elysia.patch("/:id", async ({orderService, body, params}) => orderService.updateOrder(params.id, body), {body: body, detail: detail});
elysia.delete("/:id", async ({orderService, params}) => orderService.deleteOrder(params.id), {detail: detail});

export default elysia;
