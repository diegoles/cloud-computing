<script>
	import { translations, defaultLang } from '$lib/translations.js';
	import { appStore } from '../../store.js';

	let t = translations[defaultLang];
	appStore.subscribe((s) => {
		const lang = s.currentUser?.lang || defaultLang;
		t = translations[lang] || translations[defaultLang];
	});
</script>

<svelte:head>
	<title>{t.appName}</title>
</svelte:head>

<section class="hero card">
	<h1>{t.aboutCloud}</h1>
	<p style="margin-top: 0.5rem; color: var(--muted);">{t.aboutText}</p>
	<div style="margin-top: 1.25rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
		<a href="/estudiante" class="btn">{t.student}</a>
		<a href="/admin" class="btn secondary">{t.admin}</a>
		<a href="/ranking" class="btn success">{t.ranking}</a>
	</div>
</section>

<div class="grid-2">
	<div class="card">
		<h2>{t.grading}</h2>
		<p style="color: var(--muted);">{t.featureGrading}</p>
	</div>
	<div class="card">
		<h2>{t.exams}</h2>
		<p style="color: var(--muted);">{t.featureExams}</p>
	</div>
	<div class="card">
		<h2>{t.adminTasks}</h2>
		<p style="color: var(--muted);">{t.featureAdmin}</p>
	</div>
	<div class="card">
		<h2>{t.communication}</h2>
		<p style="color: var(--muted);">{t.featureCommunication}</p>
	</div>
</div>

<style>
	.hero h1 {
		font-size: 2rem;
	}
</style>
