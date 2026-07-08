<script>
	import '../../app.css';
	import { page } from '$app/stores';
	import { teachingStore } from '$lib/teaching-vocabulary/store.js';
	import { translations, defaultLang } from '$lib/teaching-vocabulary/translations.js';

	let lang = defaultLang;

	$: t = translations[lang] || translations[defaultLang];

	function setLanguage(next) {
		lang = next;
	}
</script>

<nav class="nav-bar">
	<div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
		<a href="/teaching-vocabulary" class="brand">{t.moduleName}</a>
		<div class="nav-links">
			<a href="/teaching-vocabulary" class:active={$page.url.pathname === '/teaching-vocabulary'}>{t.home}</a>
			<a href="/teaching-vocabulary/grammar" class:active={$page.url.pathname === '/teaching-vocabulary/grammar'}>{t.grammarQuiz}</a>
			<a href="/teaching-vocabulary/vocabulary" class:active={$page.url.pathname === '/teaching-vocabulary/vocabulary'}>{t.vocabularyQuiz}</a>
			<a href="/teaching-vocabulary/ranking" class:active={$page.url.pathname === '/teaching-vocabulary/ranking'}>{t.ranking}</a>
			<div class="lang-switch">
				<button class="secondary" on:click={() => setLanguage('en')}>EN</button>
				<button class="secondary" on:click={() => setLanguage('es')}>ES</button>
			</div>
		</div>
	</div>
</nav>

<main class="container">
	<slot />
</main>

<footer class="footer">
	<div class="container" style="text-align: center;">
		<p style="color: var(--muted); font-size: 0.875rem;">{t.madeBy}</p>
		<p><a href="/" style="color: var(--muted);">← {t.backToCloud}</a></p>
	</div>
</footer>

<style>
	.nav-bar {
		background: var(--surface);
		border-bottom: 1px solid var(--border);
		padding: 0.75rem 0;
		position: sticky;
		top: 0;
		z-index: 10;
	}
	.brand {
		font-weight: 800;
		font-size: 1.1rem;
		color: var(--text);
	}
	.nav-links {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.nav-links a {
		color: var(--muted);
		font-weight: 600;
		font-size: 0.9rem;
	}
	.nav-links a.active,
	.nav-links a:hover {
		color: var(--primary);
		text-decoration: none;
	}
	.lang-switch {
		display: inline-flex;
		gap: 0.25rem;
	}
	.lang-switch button {
		padding: 0.35rem 0.6rem;
		font-size: 0.75rem;
	}
	.footer {
		border-top: 1px solid var(--border);
		padding: 2rem 1rem;
		margin-top: 2rem;
		background: var(--surface);
	}
</style>
