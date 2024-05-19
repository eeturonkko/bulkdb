import { db } from '$lib/db/index';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { weeks } from '$lib/db/schema';
import type { Actions } from './$types';
import { validateId } from '$lib/formSchema';

export const actions: Actions = {
	restoreWeek: async (event) => {
		const form = await superValidate(event, zod(validateId));
		const { id } = form.data;
		await db.update(weeks).set({ isArchived: false }).where(eq(weeks.id, id));
		redirect(303, `/week/${id}`);
	}
};
