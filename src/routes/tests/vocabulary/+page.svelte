<script>
	import QuizPlayer from '$lib/QuizPlayer.svelte';
	import { vocabularyQuiz } from '$lib/quizData.js';
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

	let started = false;
	let finished = false;
</script>

<svelte:head>
	<title>{t.vocabularyQuiz} | {t.appName}</title>
</svelte:head>

{#if !started && !finished}
	<div class="card" style="max-width: 640px; margin: 2rem auto; text-align: center;">
		<h1>{t.vocabularyQuiz}</h1>
		<p style="color: var(--muted); margin: 1rem 0;">
			{lang === 'es'
				? '10 preguntas con explicaciones bilingües. Responde y compara tu puntaje en el ranking.'
				: '10 questions with bilingual explanations. Answer and compare your score on the ranking.'}
		</p>
		<button style="margin-top: 1rem;" on:click={() => (started = true)}>{t.startQuiz}</button>
		<a href="/tests" class="btn secondary" style="margin-top: 1rem; margin-left: 0.5rem;">{t.backToDashboard}</a>
	</div>
{:else}
	<QuizPlayer quiz={vocabularyQuiz} {user} {lang} on:finish={() => { started = false; finished = true; }} />
{/if}

{#if finished && !started}
	<div class="card" style="text-align: center; max-width: 520px; margin: 1rem auto;">
		<a href="/tests/ranking" class="btn success">{t.quizRanking}</a>
		<a href="/tests" class="btn secondary">{t.backToDashboard}</a>
	</div>
{/if}
