import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';
import Account from './Account';

const Orders = sqliteTable('Orders', {
    Id: text("Id").primaryKey(),
    ShipFee: real("ShipFee"),
    TotalPrice: real("TotalPrice"),
    Address: text("Address"),
    IsPaid: integer("IsPaid", { mode: "boolean" }),
    AccountId: text("AccountId").references(() => Account.Id),
});

export default Orders;
