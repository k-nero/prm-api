import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

const Account = sqliteTable('Account', {
    Id: text("Id").primaryKey(),
    Username: text("Username").notNull().unique(),
    Password: text("Password").notNull(),
    Avatar: text("Avatar"),
    RoleName: text("RoleName")});

export default Account;
    