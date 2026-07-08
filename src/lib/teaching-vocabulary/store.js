import { writable, derived } from 'svelte/store';

// Independent fake database for the Teaching Grammar & Vocabulary module
function createTeachingStore() {
	const users = [
		{ id: 1, name: 'Edgar Diaz', email: 'edgar.diaz@school.edu', role: 'student', lang: 'en' },
		{ id: 2, name: 'Grace Rivera', email: 'grace.rivera@school.edu', role: 'student', lang: 'en' },
		{ id: 3, name: 'Carlos Mendez', email: 'carlos.m@school.edu', role: 'student', lang: 'en' },
		{ id: 4, name: 'Ana Lopez', email: 'ana.lopez@school.edu', role: 'student', lang: 'en' },
		{ id: 5, name: 'Luis Torres', email: 'luis.t@school.edu', role: 'student', lang: 'en' },
		{ id: 6, name: 'Mariana Vega', email: 'mariana.v@school.edu', role: 'student', lang: 'en' }
	];

	const materials = [
		{
			id: 1,
			title: 'Teaching Grammar and Vocabulary',
			subject: 'Grammar & Vocabulary',
			fileName: 'Teaching_Grammar_and_Vocabulary.pdf',
			size: '560 KB',
			url: '/teaching-vocabulary/resources/test/Teaching_Grammar_and_Vocabulary.pdf',
			type: 'pdf'
		}
	];

	const results = [
		{ id: 1, quizId: 'grammar', userId: 3, userName: 'Carlos Mendez', score: 80, date: '2026-06-25' },
		{ id: 2, quizId: 'grammar', userId: 4, userName: 'Ana Lopez', score: 95, date: '2026-06-26' },
		{ id: 3, quizId: 'vocabulary', userId: 5, userName: 'Luis Torres', score: 70, date: '2026-06-27' },
		{ id: 4, quizId: 'vocabulary', userId: 6, userName: 'Mariana Vega', score: 88, date: '2026-06-28' },
		{ id: 5, quizId: 'vocabulary', userId: 2, userName: 'Grace Rivera', score: 92, date: '2026-06-29' }
	];

	const currentUser = { ...users[0] };

	const { subscribe, set, update } = writable({ users, materials, results, currentUser });

	return {
		subscribe,
		setCurrentUser: (user) => update((s) => ({ ...s, currentUser: user })),
		addUser: (user) => update((s) => ({ ...s, users: [...s.users, { ...user, id: Date.now() }] })),
		addResult: (result) => update((s) => ({ ...s, results: [...s.results, { ...result, id: Date.now() }] }))
	};
}

export const teachingStore = createTeachingStore();

export const teachingRankings = derived(teachingStore, ($store) => {
	return [...$store.results]
		.sort((a, b) => b.score - a.score)
		.map((r, index) => ({ ...r, position: index + 1 }));
});
