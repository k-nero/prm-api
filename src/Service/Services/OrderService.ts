import { IOrderService, OrderModel } from "../Service.Contract/IOrders";
import db from "../../Repository/DbContext";
import { eq } from "drizzle-orm";
import { Orders } from "../../Repository/Entities/Orders";

class OrderService implements IOrderService
{
    async createOrder(order: OrderModel): Promise<any> 
    {
        order.CreatedAt = new Date();
        var result = await db.insert(Orders).values(order).returning().get();
        return result.Id;
    }
    async updateOrder(id: string, order: OrderModel): Promise<any> 
    {
        order.UpdatedAt = new Date();
        var result = await db.update(Orders).set(order).where(eq(Orders.Id, id)).execute();
        return result.rowsAffected;
    }
    async deleteOrder(orderId: string): Promise<any> 
    {
        var result = await db.delete(Orders).where(eq(Orders.Id, orderId)).execute();
        return result.rowsAffected;
    }
    async getOrder(orderId: string): Promise<any> 
    {
        var result = await db.query.Orders.findFirst({
            with: {
                account: true
            },
            columns: {
                AccountId: false,
            },
            where: eq(Orders.Id, orderId)
        })
        return result;
    }
    async getOrders(): Promise<any[]> 
    {
        var result = await db.query.Orders.findMany({
            columns: {
                AccountId: false,
            },
            with: {
                account: true
            }
        });
        return result;
    }
}

export default OrderService;