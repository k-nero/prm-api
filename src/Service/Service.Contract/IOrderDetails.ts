interface OrderDetailsModel {
    Quantity: number;
    ProductId: string;
    OrderId: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;    
}

interface IOrderDetailsService {
    createOrderDetails(orderDetails: OrderDetailsModel): Promise<any>;
    updateOrderDetails(id: string, orderDetails: OrderDetailsModel): Promise<any>;
    deleteOrderDetails(orderDetailsId: string): Promise<any>;
    getOrderDetails(orderDetailsId: string): Promise<any>;
    getOrderDetailsByOrderId(orderId: string): Promise<any[]>;
}

export { OrderDetailsModel, IOrderDetailsService };