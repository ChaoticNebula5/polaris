CREATE TABLE `work_orders` (
	`id` text PRIMARY KEY NOT NULL,
	`station` text NOT NULL,
	`asset` text NOT NULL,
	`title` text NOT NULL,
	`priority` text NOT NULL,
	`status` text DEFAULT 'Open' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_orders_created` ON `work_orders` (`created_at`);