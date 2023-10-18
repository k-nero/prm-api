import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
import Product from './Product';
import Orders from './Orders';

const OrderDetails = sqliteTable('OrderDetails', {
    Id: text("Id").primaryKey(),
    Quantity: integer("Quantity"),
    ProductId: text("ProductId").references(() => Product.Id),
    OrderId: text("OrderId").references(() => Orders.Id),
});

export default OrderDetails;