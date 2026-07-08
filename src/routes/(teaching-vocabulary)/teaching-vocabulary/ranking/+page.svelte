<script>
	import { teachingRankings } from '$lib/teaching-vocabulary/store.js';
	import { translations, defaultLang } from '$lib/teaching-vocabulary/translations.js';

	let lang = defaultLang;
	let t = translations[lang];

	$: t = translations[lang];
</script>

<svelte:head>
	<title>{t.ranking} | {t.moduleName}</title>
</svelte:head>

<h1>{t.ranking}</h1>

<div class="card">
	<table>
		<thead>
			<tr>
				<th>{t.position}</th>
				<th>{t.studentName}</th>
				<th>{t.quiz}</th>
				<th>{t.score}</th>
				<th>{t.date}</th>
				<th>{t.status}</th>
			</tr>
		</thead>
		<tbody>
			{#each $teachingRankings as r}
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
					<td>{r.quizId === 'grammar' ? t.grammar : t.vocabulary}</td>
					<td>
						<span class="badge" class:success={r.score >= 70} class:warning={r.score >= 60 && r.score < 70} class:danger={r.score < 60}>
							{r.score}%
						</span>
					</td>
					<td>{r.date}</td>
					<td>
						{#if r.score >= 70}
							{t.passed}
						{:else}
							{t.needsReview}
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="card" style="text-align: center;">
	<a href="/teaching-vocabulary" class="btn secondary">{t.backToDashboard}</a>
</div>
