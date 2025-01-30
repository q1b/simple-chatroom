import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { userTable } from './user';
import { createdAt, id } from '../utils';
import { relations } from 'drizzle-orm';

export const messageTable = sqliteTable('message', {
	id,
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id, { onDelete: 'cascade' }),
	content: text('text'),
	createdAt
});

export const messageTableRelations = relations(messageTable, ({ one }) => ({
	user: one(userTable, {
		fields: [messageTable.userId],
		references: [userTable.id],
	})
}));

export type Message = typeof messageTable.$inferSelect;
