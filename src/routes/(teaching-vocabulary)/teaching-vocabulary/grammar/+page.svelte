<script>
	import QuizPlayer from '$lib/teaching-vocabulary/QuizPlayer.svelte';
	import { grammarQuiz } from '$lib/teaching-vocabulary/quizData.js';
	import { teachingStore } from '$lib/teaching-vocabulary/store.js';
	import { translations, defaultLang } from '$lib/teaching-vocabulary/translations.js';

	let lang = defaultLang;
	let t = translations[lang];
	let user = $teachingStore.currentUser;

	teachingStore.subscribe((s) => {
		user = s.currentUser;
	});

	$: t = translations[lang];

	let started = false;
	let finished = false;
</script>

<svelte:head>
	<title>{t.grammarQuiz} | {t.moduleName}</title>
</svelte:head>

{#if !started && !finished}
	<div class="card" style="max-width: 640px; margin: 2rem auto; text-align: center;">
		<h1>{t.grammarQuiz}</h1>
		<p style="color: var(--muted); margin: 1rem 0;">{t.quizIntro}</p>
		<button style="margin-top: 1rem;" on:click={() => (started = true)}>{t.startQuiz}</button>
		<a href="/teaching-vocabulary" class="btn secondary" style="margin-top: 1rem; margin-left: 0.5rem;">{t.backToDashboard}</a>
	</div>
{:else}
	<QuizPlayer quiz={grammarQuiz} {user} {lang} on:finish={() => { started = false; finished = true; }} />
{/if}

{#if finished && !started}
	<div class="card" style="text-align: center; max-width: 520px; margin: 1rem auto;">
		<a href="/teaching-vocabulary/ranking" class="btn success">{t.ranking}</a>
		<a href="/teaching-vocabulary" class="btn secondary">{t.backToDashboard}</a>
	</div>
{/if}
