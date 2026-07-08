<script>
	import { teachingStore } from '$lib/teaching-vocabulary/store.js';
	import { translations, defaultLang } from '$lib/teaching-vocabulary/translations.js';

	let lang = defaultLang;
	let t = translations[lang];
	$: t = translations[lang];
</script>

<svelte:head>
	<title>{t.moduleName}</title>
</svelte:head>

<h1>{t.moduleName}</h1>
<p style="color: var(--muted); margin-bottom: 1rem;">{t.pdfNote}</p>

<div class="grid-2">
	<div class="card">
		<h2>{t.grammarQuiz}</h2>
		<p style="color: var(--muted); margin-bottom: 1.25rem;">
			{lang === 'es'
				? '10 preguntas sobre enfoques, marcos y técnicas para enseñar gramática.'
				: '10 questions on approaches, frameworks, and techniques for teaching grammar.'}
		</p>
		<a href="/teaching-vocabulary/grammar" class="btn">{t.startQuiz}</a>
	</div>
	<div class="card">
		<h2>{t.vocabularyQuiz}</h2>
		<p style="color: var(--muted); margin-bottom: 1.25rem;">
			{lang === 'es'
				? '10 preguntas sobre selección, presentación, práctica y retención de vocabulario.'
				: '10 questions on selecting, presenting, practising, and remembering vocabulary.'}
		</p>
		<a href="/teaching-vocabulary/vocabulary" class="btn success">{t.startQuiz}</a>
	</div>
</div>

<div class="card" style="text-align: center;">
	<a href="/teaching-vocabulary/ranking" class="btn secondary">{t.ranking}</a>
</div>
