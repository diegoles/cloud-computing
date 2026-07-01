import { writable, derived } from 'svelte/store';

// Fake initial data for the educational portal
function createStore() {
	const users = [
		{ id: 1, name: 'Edgar Diaz', email: 'edgar.diaz@school.edu', role: 'student', lang: 'en' },
		{ id: 2, name: 'Grace Rivera', email: 'grace.rivera@school.edu', role: 'student', lang: 'en' },
		{ id: 3, name: 'Carlos Mendez', email: 'carlos.m@school.edu', role: 'student', lang: 'en' },
		{ id: 4, name: 'Ana Lopez', email: 'ana.lopez@school.edu', role: 'student', lang: 'en' },
		{ id: 5, name: 'Luis Torres', email: 'luis.t@school.edu', role: 'student', lang: 'en' },
		{ id: 6, name: 'Mariana Vega', email: 'mariana.v@school.edu', role: 'student', lang: 'en' },
		{ id: 99, name: 'Professor Admin', email: 'admin@school.edu', role: 'admin', lang: 'en' }
	];

	const materials = [
		{ id: 1, title: 'Cloud Computing Basics', subject: 'Cloud Computing', fileName: 'cloud-basics.pdf', size: '1.2 MB', url: 'data:text/plain;base64,Cloud+Basics+PDF+mock', type: 'pdf' },
		{ id: 2, title: 'Cloud Security Challenges', subject: 'Security', fileName: 'security-challenges.pdf', size: '2.4 MB', url: 'data:text/plain;base64,Security+Challenges+PDF+mock', type: 'pdf' },
		{ id: 3, title: 'AWS vs Azure vs GCP', subject: 'Cloud Environments', fileName: 'providers-comparison.pdf', size: '1.8 MB', url: 'data:text/plain;base64,Providers+Comparison+PDF+mock', type: 'pdf' }
	];

	const tests = [
		{ id: 1, userId: 3, userName: 'Carlos Mendez', score: 80, date: '2026-06-25' },
		{ id: 2, userId: 4, userName: 'Ana Lopez', score: 95, date: '2026-06-26' },
		{ id: 3, userId: 5, userName: 'Luis Torres', score: 70, date: '2026-06-27' },
		{ id: 4, userId: 6, userName: 'Mariana Vega', score: 88, date: '2026-06-28' },
		{ id: 5, userId: 2, userName: 'Grace Rivera', score: 92, date: '2026-06-29' }
	];

	const currentUser = { ...users[0] }; // Default student

	const { subscribe, set, update } = writable({ users, materials, tests, currentUser });

	return {
		subscribe,
		setCurrentUser: (user) => update((s) => ({ ...s, currentUser: user })),
		addUser: (user) => update((s) => ({ ...s, users: [...s.users, { ...user, id: Date.now() }] })),
		removeUser: (id) => update((s) => ({ ...s, users: s.users.filter((u) => u.id !== id) })),
		addMaterial: (material) => update((s) => ({ ...s, materials: [...s.materials, { ...material, id: Date.now() }] })),
		addTestResult: (test) => update((s) => ({ ...s, tests: [...s.tests, { ...test, id: Date.now() }] }))
	};
}

export const appStore = createStore();

// Derived ranking sorted by score descending
export const rankings = derived(appStore, ($store) => {
	return [...$store.tests]
		.sort((a, b) => b.score - a.score)
		.map((t, index) => ({ ...t, position: index + 1 }));
});
