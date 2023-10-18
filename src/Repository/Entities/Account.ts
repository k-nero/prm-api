import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { Guid } from 'typescript-guid';
import { relations, Many } from 'drizzle-orm';
import { Orders } from './Orders';

const Account = sqliteTable('Account', {
    Id: text("Id").primaryKey().default(Guid.create().toString()),
    Username: text("Username").notNull().unique(),
    Password: text("Password").notNull(),
    Avatar: text("Avatar"),
    RoleName: text("RoleName"),
    CreatedAt: integer("CreatedAt", { mode: "timestamp" }),
    UpdatedAt: integer("UpdatedAt", { mode: "timestamp" })
});

const AccountRelationship = relations(Account, ({many}) => ({
    orders: many(Orders)
}))
export { Account, AccountRelationship };
    