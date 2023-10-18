import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { createClient } from '@libsql/client';
import { Account, AccountRelationship } from './Entities/Account';
import { Orders, OrdersRelationship } from './Entities/Orders';
import { OrderDetails, OrderDetailsRelationship } from './Entities/OrderDetails';
import { Product, ProductRelationship } from './Entities/Product';  

var schema = {
    Account,
    AccountRelationship,
    Orders,
    OrdersRelationship,
    OrderDetails,
    OrderDetailsRelationship,
    Product,
    ProductRelationship
};

const client = createClient({ url: process.env.DATABASE_URL || "default", authToken: process.env.TURSO_AUTH_TOKEN });
const db = drizzle(client, { schema });

await migrate(db, {migrationsFolder: "./src/Repository/Migration"});
export default db;