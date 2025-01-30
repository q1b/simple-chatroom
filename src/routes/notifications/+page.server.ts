import { db } from "$lib/server/db"
import { eq } from "drizzle-orm"
import type { PageServerLoad } from "./$types"
import { redirect } from "@sveltejs/kit"
import { notificationTable } from "$lib/server/db/schema"

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user && event.url.pathname !== '/notifications')
		return redirect(302, '/')

	const notifications = await db.query.notificationTable.findMany({
		where: eq(notificationTable.userId, event.locals.user.id)
	})

	return {
		notifications
	}
}
