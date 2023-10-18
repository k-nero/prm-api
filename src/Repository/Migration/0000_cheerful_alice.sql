CREATE TABLE `Account` (
	`Id` text PRIMARY KEY NOT NULL,
	`Username` text NOT NULL,
	`Password` text NOT NULL,
	`Avatar` text,
	`RoleName` text
);
--> statement-breakpoint
CREATE TABLE `OrderDetails` (
	`Id` text PRIMARY KEY NOT NULL,
	`Quantity` integer,
	`ProductId` text,
	`OrderId` text,
	FOREIGN KEY (`ProductId`) REFERENCES `Product`(`Id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`OrderId`) REFERENCES `Orders`(`Id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `Orders` (
	`Id` text PRIMARY KEY NOT NULL,
	`ShipFee` real,
	`TotalPrice` real,
	`Address` text,
	`IsPaid` integer,
	`AccountId` text,
	FOREIGN KEY (`AccountId`) REFERENCES `Account`(`Id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `Product` (
	`Id` text PRIMARY KEY NOT NULL,
	`ProductName` text,
	`Price` real,
	`Description` text,
	`ImgUrl` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Account_Username_unique` ON `Account` (`Username`);