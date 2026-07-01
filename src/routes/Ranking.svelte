<script>
	import { rankings } from '../store.js';
	import { translations } from '$lib/translations.js';

	export let lang = 'en';
	$: t = translations[lang] || translations['en'];
</script>

<h1>{t.ranking}</h1>

<div class="card">
	<table>
		<thead>
			<tr>
				<th>{t.position}</th>
				<th>{t.studentName}</th>
				<th>{t.score}</th>
				<th>{t.date}</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			{#each $rankings as r}
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
					<td>
						<span class="badge" class:success={r.score >= 70} class:warning={r.score >= 60 && r.score < 70} class:danger={r.score < 60}>
							{r.score}%
						</span>
					</td>
					<td>{r.date}</td>
					<td>
						{#if r.score >= 70}
							Passed
						{:else}
							Needs review
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
