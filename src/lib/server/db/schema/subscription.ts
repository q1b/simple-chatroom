import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { userTable } from './user';
import { createdAt, id } from '../utils';

export const subscriptionTable = sqliteTable('subscription', {
	id,
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id, { onDelete: 'cascade' }),
	endpoint: text('endpoint'),
	p256dh: text('p256dh'),
	auth: text('auth'),
	createdAt
});

export type Subscription = typeof subscriptionTable.$inferSelect;
