import { db } from "$lib/server/db";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/');
	}

	const users = db.query.userTable.findMany()
	return {
		users
	}
}
