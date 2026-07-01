<script>
	import { appStore } from '../store.js';
	import { translations } from '$lib/translations.js';
	import TestCloud from './TestCloud.svelte';

	export let user = null;
	export let lang = 'en';
	$: t = translations[lang] || translations['en'];

	let takingTest = false;

	$: myTests = $appStore.tests.filter((t) => t.userId === user?.id || t.userName === user?.name);
	$: myMaterials = $appStore.materials;
</script>

<h1>{t.student}</h1>
<p style="color: var(--muted); margin-bottom: 1rem;">{t.welcome}, {user?.name} ({user?.email})</p>

{#if takingTest}
	<TestCloud {user} {lang} on:finish={() => (takingTest = false)} />
{:else}
	<div class="grid-2">
		<div class="card">
			<h2>{t.materials}</h2>
			{#if myMaterials.length === 0}
				<p>{t.noMaterials}</p>
			{:else}
				<table>
					<thead>
						<tr>
							<th>{t.title}</th>
							<th>{t.subject}</th>
							<th>{t.actions}</th>
						</tr>
					</thead>
					<tbody>
						{#each myMaterials as mat}
							<tr>
								<td>{mat.title}</td>
								<td>{mat.subject}</td>
								<td><a href={mat.url} download={mat.fileName} class="btn" style="padding: 0.35rem 0.6rem; font-size: 0.8rem;">{t.download}</a></td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</div>

		<div class="card">
			<h2>{t.exams}</h2>
			{#if myTests.length === 0}
				<p>{t.noTests}</p>
			{:else}
				<table>
					<thead>
						<tr>
							<th>{t.date}</th>
							<th>{t.score}</th>
						</tr>
					</thead>
					<tbody>
						{#each myTests as test}
							<tr>
								<td>{test.date}</td>
								<td><span class="badge" class:success={test.score >= 70} class:danger={test.score < 60}>{test.score}%</span></td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
			<button style="margin-top: 1rem; width: 100%;" on:click={() => (takingTest = true)}>{t.startExam}</button>
		</div>
	</div>
{/if}
