import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { Product } from './Product';
import { Orders } from './Orders';
import { Guid } from 'typescript-guid';
import { relations } from 'drizzle-orm';

const OrderDetails = sqliteTable('OrderDetails', {
    Id: text("Id").primaryKey().default(Guid.create().toString()),
    Quantity: integer("Quantity"),
    ProductId: text("ProductId").references(() => Product.Id),
    OrderId: text("OrderId").references(() => Orders.Id),
    CreatedAt: integer("CreatedAt", { mode: "timestamp" }),
    UpdatedAt: integer("UpdatedAt", { mode: "timestamp" })
});

const OrderDetailsRelationship = relations(OrderDetails, ({one}) => ({
    product: one(Product, {
        fields: [OrderDetails.ProductId],
        references: [Product.Id]
    }),
    orders: one(Orders, {
        fields: [OrderDetails.OrderId],
        references: [Orders.Id]
    })
}));

export { OrderDetailsRelationship, OrderDetails };