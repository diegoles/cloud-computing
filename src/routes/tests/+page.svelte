<script>
	import { appStore } from '../../store.js';
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
	<title>{t.tests} | {t.appName}</title>
</svelte:head>

<h1>{t.tests}</h1>
<p style="color: var(--muted); margin-bottom: 1rem;">
	{lang === 'es'
		? 'Basado en el material del PDF: Teaching Grammar and Vocabulary'
		: 'Based on the material from the PDF: Teaching Grammar and Vocabulary'}
</p>

<div class="grid-2">
	<div class="card">
		<h2>{t.grammarQuiz}</h2>
		<p style="color: var(--muted); margin-bottom: 1.25rem;">
			{lang === 'es'
				? '10 preguntas sobre enfoques, marcos y técnicas para enseñar gramática.'
				: '10 questions on approaches, frameworks, and techniques for teaching grammar.'}
		</p>
		<a href="/tests/grammar" class="btn">{t.startQuiz}</a>
	</div>
	<div class="card">
		<h2>{t.vocabularyQuiz}</h2>
		<p style="color: var(--muted); margin-bottom: 1.25rem;">
			{lang === 'es'
				? '10 preguntas sobre selección, presentación, práctica y retención de vocabulario.'
				: '10 questions on selecting, presenting, practising, and remembering vocabulary.'}
		</p>
		<a href="/tests/vocabulary" class="btn success">{t.startQuiz}</a>
	</div>
</div>

<div class="card" style="text-align: center;">
	<a href="/tests/ranking" class="btn secondary">{t.quizRanking}</a>
</div>
