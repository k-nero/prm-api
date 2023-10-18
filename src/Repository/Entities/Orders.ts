import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';
import { Account } from './Account';
import { Guid } from 'typescript-guid';
import { relations } from 'drizzle-orm';
import { OrderDetails } from './OrderDetails';

const Orders = sqliteTable('Orders', {
    Id: text("Id").primaryKey().default(Guid.create().toString()),
    ShipFee: real("ShipFee"),
    TotalPrice: real("TotalPrice"),
    Address: text("Address"),
    IsPaid: integer("IsPaid", { mode: "boolean" }),
    AccountId: text("AccountId").references(() => Account.Id),
    CreatedAt: integer("CreatedAt", { mode: "timestamp" }),
    UpdatedAt: integer("UpdatedAt", { mode: "timestamp" })
});

const OrdersRelationship = relations(Orders, ({one, many}) => ({
    account: one(Account, {
        fields: [Orders.AccountId],
        references: [Account.Id]
    }),
    orderDetails: many(OrderDetails)
}));

export { Orders, OrdersRelationship};
