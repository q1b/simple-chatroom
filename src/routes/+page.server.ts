import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { messageTable } from '$lib/server/db/schema';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user && event.url.pathname !== '/')
		return redirect(302, '/')

	const messages = await db.query.messageTable.findMany({
		with: {
			user: true
		}
	})

	return {
		messages
	}
}

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData()
		const message = formData.get('message')?.toString()
		if (event.locals.user.id)
			await db.insert(messageTable).values({
				userId: event.locals.user.id,
				content: message,
			})
	}
} satisfies Actions;
