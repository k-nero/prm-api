interface OrderModel
{
    ShipFee: number;
    TotalPrice: number;
    Address: string;
    IsPaid: boolean;
    AccountId: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
}

interface IOrderService
{
    createOrder(order: OrderModel): Promise<any>;
    updateOrder(id: string, order: OrderModel): Promise<any>;
    deleteOrder(orderId: string): Promise<any>;
    getOrder(orderId: string): Promise<any>;
    getOrders(): Promise<any[]>;
}

export { OrderModel, IOrderService };