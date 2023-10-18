import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';
import { Guid } from 'typescript-guid';
import { relations } from 'drizzle-orm';
import { Orders } from './Orders';

const Product = sqliteTable('Product', {
    Id: text("Id").primaryKey().default(Guid.create().toString()),
    ProductName: text("ProductName"),
    Price: real("Price"),
    Description: text("Description"),
    ImgUrl: text("ImgUrl"),
    CreatedAt: integer("CreatedAt", { mode: "timestamp" }),
    UpdatedAt: integer("UpdatedAt", { mode: "timestamp" })
});

const ProductRelationship = relations(Product, ({many}) => ({
    orders: many(Orders)
}));

export { Product, ProductRelationship};