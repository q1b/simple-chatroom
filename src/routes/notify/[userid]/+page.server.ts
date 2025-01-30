import type { Actions } from "./$types";

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData()

		const title = formData.get('title')?.toString()
		const body = formData.get('body')?.toString()

		if (!title || !body) return

		await event.fetch('/api/push/send', {
			method: 'POST',
			body: JSON.stringify(
				{
					title: title,
					body,
					userId: event.params.userid
				}
			),
		})

	}
} satisfies Actions;
