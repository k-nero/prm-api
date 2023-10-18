import { sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

const Product = sqliteTable('Product', {
    Id: text("Id").primaryKey(),
    ProductName: text("ProductName"),
    Price: real("Price"),
    Description: text("Description"),
    ImgUrl: text("ImgUrl")
});

export default Product;