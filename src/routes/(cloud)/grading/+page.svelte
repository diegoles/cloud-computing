<script>
	import { appStore } from '../../../store.js';
	import { translations } from '$lib/translations.js';

	let user = $appStore.currentUser;
	let lang = user?.lang || 'en';
	let t = translations[lang] || translations['en'];

	appStore.subscribe((s) => {
		user = s.currentUser;
		lang = user?.lang || 'en';
		t = translations[lang] || translations['en'];
	});

	let filter = 'all';

	$: filteredGrades = $appStore.grades.filter((g) => {
		if (user?.role === 'admin') return filter === 'all' ? true : g.status === filter;
		return g.userId === user?.id;
	});

	$: stats = {
		total: filteredGrades.length,
		passed: filteredGrades.filter((g) => g.status === 'passed').length,
		average: filteredGrades.length ? Math.round(filteredGrades.reduce((a, b) => a + b.score, 0) / filteredGrades.length) : 0
	};
</script>

<svelte:head>
	<title>{t.grading} | {t.appName}</title>
</svelte:head>

<h1>{t.grading}</h1>

{#if user?.role === 'admin'}
	<div class="card" style="margin-bottom: 1.5rem;">
		<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
			<label>Filter:</label>
			<select bind:value={filter}>
				<option value="all">All</option>
				<option value="passed">Passed</option>
				<option value="failed">Failed</option>
			</select>
			<div style="margin-left: auto; display: flex; gap: 1rem;">
				<span><strong>Total:</strong> {stats.total}</span>
				<span><strong>Passed:</strong> {stats.passed}</span>
				<span><strong>Average:</strong> {stats.average}%</span>
			</div>
		</div>
	</div>
{:else}
	<div class="card" style="margin-bottom: 1.5rem; display: flex; gap: 1.5rem; flex-wrap: wrap;">
		<span><strong>Your Exams:</strong> {stats.total}</span>
		<span><strong>Passed:</strong> {stats.passed}</span>
		<span><strong>Average:</strong> {stats.average}%</span>
	</div>
{/if}

<div class="card">
	<table>
		<thead>
			<tr>
				<th>{t.studentName}</th>
				<th>Exam</th>
				<th>{t.score}</th>
				<th>Status</th>
				<th>Feedback</th>
				<th>{t.date}</th>
			</tr>
		</thead>
		<tbody>
			{#each filteredGrades as grade}
				<tr>
					<td>{grade.userName}</td>
					<td>{grade.examTitle}</td>
					<td><strong>{grade.score}%</strong></td>
					<td>
						<span class="badge" class:success={grade.status === 'passed'} class:danger={grade.status === 'failed'}>
							{grade.status}
						</span>
					</td>
					<td>{grade.feedback}</td>
					<td>{grade.date}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if filteredGrades.length === 0}
		<p style="text-align: center; color: var(--muted); padding: 2rem;">No grades available yet.</p>
	{/if}
</div>
