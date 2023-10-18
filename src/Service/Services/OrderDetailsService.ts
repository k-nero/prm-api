import { IOrderDetailsService, OrderDetailsModel } from "../Service.Contract/IOrderDetails";
import db from "../../Repository/DbContext";
import { eq } from "drizzle-orm";
import { OrderDetails } from "../../Repository/Entities/OrderDetails";

class OrderDetailsService implements IOrderDetailsService
{
    async createOrderDetails(orderDetails: OrderDetailsModel): Promise<any> 
    {
        orderDetails.CreatedAt = new Date();
        var result = await db.insert(OrderDetails).values(orderDetails).returning().get();
        return result.Id;
    }
    async updateOrderDetails(id: string, orderDetails: OrderDetailsModel): Promise<any> 
    {
        orderDetails.UpdatedAt = new Date();
        var result = await db.update(OrderDetails).set(orderDetails).where(eq(OrderDetails.Id, id)).execute();
        return result.rowsAffected;
    }
    async deleteOrderDetails(orderDetailsId: string): Promise<any> 
    {
        var result = await db.delete(OrderDetails).where(eq(OrderDetails.Id, orderDetailsId)).execute();
        return result.rowsAffected;
    }
    async getOrderDetails(orderDetailsId: string): Promise<any> 
    {
        var result = await db.query.OrderDetails.findFirst({
            where: eq(OrderDetails.Id, orderDetailsId),
            with: {
                product: true
            }
        }).execute();
        return result;
    }
    async getOrderDetailsByOrderId(orderId: string): Promise<any[]> 
    {
        var result = await db.query.OrderDetails.findMany({
            where: eq(OrderDetails.OrderId, orderId),
            with: {
                product: true
            }
        }).execute();
        return result;
    }
}

export default OrderDetailsService;