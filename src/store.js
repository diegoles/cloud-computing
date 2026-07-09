import { writable, derived } from 'svelte/store';

// Fake initial data for the educational portal
function createStore() {
	const users = [
		{ id: 1, name: 'Edgar Diaz', email: 'eediaz12@espe.edu.ec', role: 'student', lang: 'en' },
		{ id: 2, name: 'Grace Rivera', email: 'grace.rivera@espe.edu.ec', role: 'student', lang: 'en' },
		{ id: 3, name: 'Carlos Mendez', email: 'carlos.m@espe.edu.ec', role: 'student', lang: 'en' },
		{ id: 4, name: 'Ana Lopez', email: 'ana.lopez@espe.edu.ec', role: 'student', lang: 'en' },
		{ id: 5, name: 'Luis Torres', email: 'luis.t@espe.edu.ec', role: 'student', lang: 'en' },
		{ id: 6, name: 'Mariana Vega', email: 'mariana.v@espe.edu.ec', role: 'student', lang: 'en' },
		{ id: 99, name: 'Professor Admin', email: 'admin@espe.edu.ec', role: 'admin', lang: 'en' }
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

	const exams = [
		{
			id: 1,
			title: 'Cloud Computing Fundamentals',
			subject: 'Cloud Computing',
			questions: [
				{
					id: 1,
					question: 'What is the main benefit of cloud computing?',
					options: ['On-demand resources', 'Physical servers only', 'No internet needed', 'Expensive hardware'],
					correct: 0
				},
				{
					id: 2,
					question: 'Which of these is a cloud service model?',
					options: ['HTTP', 'IaaS', 'CPU', 'RAM'],
					correct: 1
				},
				{
					id: 3,
					question: 'What does SaaS stand for?',
					options: ['Software as a System', 'Software as a Service', 'System as a Service', 'Storage as a Service'],
					correct: 1
				}
			]
		},
		{
			id: 2,
			title: 'Cloud Security',
			subject: 'Security',
			questions: [
				{
					id: 1,
					question: 'What is a shared responsibility model?',
					options: ['Cloud provider manages everything', 'User and provider split security duties', 'No security needed', 'Only user is responsible'],
					correct: 1
				},
				{
					id: 2,
					question: 'Which of these is a common cloud security risk?',
					options: ['Fast deployment', 'Data breaches', 'Scalability', 'Cost savings'],
					correct: 1
				}
			]
		}
	];

	const grades = [
		{ id: 1, userId: 3, userName: 'Carlos Mendez', examId: 1, examTitle: 'Cloud Computing Fundamentals', score: 80, feedback: 'Good understanding of basics.', status: 'passed', date: '2026-06-25' },
		{ id: 2, userId: 4, userName: 'Ana Lopez', examId: 1, examTitle: 'Cloud Computing Fundamentals', score: 95, feedback: 'Excellent work.', status: 'passed', date: '2026-06-26' },
		{ id: 3, userId: 5, userName: 'Luis Torres', examId: 2, examTitle: 'Cloud Security', score: 70, feedback: 'Review security concepts.', status: 'passed', date: '2026-06-27' },
		{ id: 4, userId: 6, userName: 'Mariana Vega', examId: 2, examTitle: 'Cloud Security', score: 58, feedback: 'Needs review of shared responsibility.', status: 'failed', date: '2026-06-28' },
		{ id: 5, userId: 2, userName: 'Grace Rivera', examId: 1, examTitle: 'Cloud Computing Fundamentals', score: 92, feedback: 'Great job.', status: 'passed', date: '2026-06-29' }
	];

	const adminTasks = [
		{ id: 1, title: 'Review pending exam submissions', priority: 'high', status: 'pending', assignee: 'Professor Admin', dueDate: '2026-07-09' },
		{ id: 2, title: 'Upload new study materials', priority: 'medium', status: 'completed', assignee: 'Professor Admin', dueDate: '2026-07-05' },
		{ id: 3, title: 'Update student contact list', priority: 'low', status: 'pending', assignee: 'Professor Admin', dueDate: '2026-07-12' }
	];

	const messages = [
		{ id: 1, senderId: 99, senderName: 'Professor Admin', recipientId: 1, content: 'Welcome to the new semester!', timestamp: '2026-07-01T08:00:00', read: true },
		{ id: 2, senderId: 1, senderName: 'Edgar Diaz', recipientId: 99, content: 'Thank you, professor. When is the first exam?', timestamp: '2026-07-01T09:30:00', read: true },
		{ id: 3, senderId: 99, senderName: 'Professor Admin', recipientId: 1, content: 'Next Friday. Study chapters 1-3.', timestamp: '2026-07-01T09:45:00', read: false }
	];

	const currentUser = { ...users[0] }; // Default student

	const { subscribe, set, update } = writable({ users, materials, tests, exams, grades, adminTasks, messages, currentUser });

	return {
		subscribe,
		setCurrentUser: (user) => update((s) => ({ ...s, currentUser: user })),
		addUser: (user) => update((s) => ({ ...s, users: [...s.users, { ...user, id: Date.now() }] })),
		removeUser: (id) => update((s) => ({ ...s, users: s.users.filter((u) => u.id !== id) })),
		addMaterial: (material) => update((s) => ({ ...s, materials: [...s.materials, { ...material, id: Date.now() }] })),
		addTestResult: (test) => update((s) => ({ ...s, tests: [...s.tests, { ...test, id: Date.now() }] })),
		addExam: (exam) => update((s) => ({ ...s, exams: [...s.exams, { ...exam, id: Date.now() }] })),
		removeExam: (id) => update((s) => ({ ...s, exams: s.exams.filter((e) => e.id !== id) })),
		addGrade: (grade) => update((s) => ({ ...s, grades: [...s.grades, { ...grade, id: Date.now() }] })),
		updateGrade: (id, updates) => update((s) => ({ ...s, grades: s.grades.map((g) => (g.id === id ? { ...g, ...updates } : g)) })),
		addAdminTask: (task) => update((s) => ({ ...s, adminTasks: [...s.adminTasks, { ...task, id: Date.now() }] })),
		updateAdminTask: (id, updates) => update((s) => ({ ...s, adminTasks: s.adminTasks.map((t) => (t.id === id ? { ...t, ...updates } : t)) })),
		removeAdminTask: (id) => update((s) => ({ ...s, adminTasks: s.adminTasks.filter((t) => t.id !== id) })),
		sendMessage: (message) => update((s) => ({ ...s, messages: [...s.messages, { ...message, id: Date.now(), timestamp: new Date().toISOString() }] })),
		markMessageRead: (id) => update((s) => ({ ...s, messages: s.messages.map((m) => (m.id === id ? { ...m, read: true } : m)) }))
	};
}

export const appStore = createStore();

// Derived ranking sorted by score descending
export const rankings = derived(appStore, ($store) => {
	return [...$store.tests]
		.sort((a, b) => b.score - a.score)
		.map((t, index) => ({ ...t, position: index + 1 }));
});
