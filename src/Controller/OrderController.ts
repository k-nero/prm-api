import { Elysia, t } from "elysia";
import OrderService from "../Service/Services/OrderService";
import OrderDetailsService from "../Service/Services/OrderDetailsService";

const body = t.Object({
    ShipFee: t.Number(),
    TotalPrice: t.Number(),
    Address: t.String(),
    IsPaid: t.Boolean(),
    AccountId: t.String()
});

const orderDetailBody = t.Object({
    Quantity: t.Number(),
    ProductId: t.String(),
});

class orderDetail 
{
    Quantity: number;
    ProductId: string;
    OrderId: string;

    constructor(quantity: number, productId: string, orderId: string) 
    {
        this.Quantity = quantity;
        this.ProductId = productId;
        this.OrderId = orderId;
    }
}

const detail = {
    tags: ['Order']
};

const elysia = new Elysia();
elysia.decorate('orderService', new OrderService())
    .decorate('orderDetailsService', new OrderDetailsService())
    .get("/", async ({ orderService }) => orderService.getOrders(), { detail: detail })
    .get("/:id", async ({ orderService, params }) => orderService.getOrder(params.id), { detail: detail })
    .post("/", async ({ orderService, body }) => orderService.createOrder(body), { body: body, detail: detail })
    .patch("/:id", async ({ orderService, body, params }) => orderService.updateOrder(params.id, body), { body: body, detail: detail })
    .delete("/:id", async ({ orderService, params }) => orderService.deleteOrder(params.id), { detail: detail })
    .get("/:id/order-details", async ({ orderDetailsService, params }) => orderDetailsService.getOrderDetailsByOrderId(params.id), { detail: detail })
    .post("/:id/order-details", async ({ orderDetailsService, body, params }) => orderDetailsService.createOrderDetails(new orderDetail(body.Quantity, body.ProductId, params.id)), { body: orderDetailBody, detail: detail })
    .patch("/:id/order-details/:order-detail-id", async ({ orderDetailsService, body, params }) => orderDetailsService.updateOrderDetails(params["order-detail-id"], new orderDetail(body.Quantity, body.ProductId, params.id)), { body: orderDetailBody, detail: detail })

export default elysia;
