import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { deleteSessionTokenCookie, invalidateSession } from "$lib/server/auth/session";

export const actions = {
	logout: async (event) => {
		if (event.locals.session === null) {
			return fail(401);
		}
		await invalidateSession(event.locals.session.id);
		deleteSessionTokenCookie(event);
		return redirect(302, "/");
	}
} satisfies Actions;
