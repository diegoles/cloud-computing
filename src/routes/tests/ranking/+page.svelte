<script>
	import { quizRankings } from '../../../store.js';
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
</script>

<svelte:head>
	<title>{t.quizRanking} | {t.appName}</title>
</svelte:head>

<h1>{t.quizRanking}</h1>

<div class="card">
	<table>
		<thead>
			<tr>
				<th>{t.position}</th>
				<th>{t.studentName}</th>
				<th>{lang === 'es' ? 'Cuestionario' : 'Quiz'}</th>
				<th>{t.score}</th>
				<th>{t.date}</th>
				<th>{lang === 'es' ? 'Estado' : 'Status'}</th>
			</tr>
		</thead>
		<tbody>
			{#each $quizRankings as r}
				<tr>
					<td>
						{#if r.position === 1}
							🥇
						{:else if r.position === 2}
							🥈
						{:else if r.position === 3}
							🥉
						{:else}
							#{r.position}
						{/if}
					</td>
					<td>{r.userName}</td>
					<td>{r.quizId === 'grammar' ? t.grammarQuiz : t.vocabularyQuiz}</td>
					<td>
						<span class="badge" class:success={r.score >= 70} class:warning={r.score >= 60 && r.score < 70} class:danger={r.score < 60}>
							{r.score}%
						</span>
					</td>
					<td>{r.date}</td>
					<td>
						{#if r.score >= 70}
							{lang === 'es' ? 'Aprobado' : 'Passed'}
						{:else}
							{lang === 'es' ? 'Necesita revisión' : 'Needs review'}
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="card" style="text-align: center;">
	<a href="/tests" class="btn secondary">{t.backToDashboard}</a>
</div>
