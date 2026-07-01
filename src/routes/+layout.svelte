<script>
	import '../app.css';
	import { appStore } from '../store.js';
	import { translations, defaultLang } from '$lib/translations.js';
	import { page } from '$app/stores';

	let lang = defaultLang;
	let showLogin = false;

	$: t = translations[lang] || translations[defaultLang];
	$: user = $appStore.currentUser;
	$: isAdmin = user?.role === 'admin';
	$: isStudent = user?.role === 'student';

	function setLanguage(next) {
		lang = next;
		appStore.update((s) => ({ ...s, currentUser: { ...s.currentUser, lang: next } }));
	}

	function logout() {
		appStore.setCurrentUser($appStore.users[0]); // reset to default student
		showLogin = false;
	}
</script>

<nav class="nav-bar">
	<div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
		<a href="/" class="brand">{t.appName}</a>
		<div class="nav-links">
			<a href="/" class:active={$page.url.pathname === '/'}>{t.home}</a>
			{#if isAdmin}
				<a href="/admin" class:active={$page.url.pathname === '/admin'}>{t.admin}</a>
			{/if}
			{#if isStudent}
				<a href="/estudiante" class:active={$page.url.pathname === '/estudiante'}>{t.student}</a>
			{/if}
			<a href="/ranking" class:active={$page.url.pathname === '/ranking'}>{t.ranking}</a>
			<div class="lang-switch">
				<button class="secondary" on:click={() => setLanguage('en')}>EN</button>
				<button class="secondary" on:click={() => setLanguage('es')}>ES</button>
			</div>
			{#if showLogin || user}
				<button class="secondary" on:click={logout}>{t.logout}</button>
			{:else}
				<button class="secondary" on:click={() => (showLogin = true)}>{t.login}</button>
			{/if}
		</div>
	</div>
</nav>

{#if showLogin}
	<div class="container" style="margin-top: 1rem;">
		<div class="card">
			<label for="roleSelect">{t.chooseRole}</label>
			<select id="roleSelect" value={user?.email} on:change={(e) => appStore.setCurrentUser($appStore.users.find((u) => u.email === e.target.value))}>
				{#each $appStore.users as u}
					<option value={u.email}>{u.name} ({u.email}) — {u.role === 'admin' ? t.roleAdmin : t.roleStudent}</option>
				{/each}
			</select>
			<div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
				<button on:click={() => (showLogin = false)}>{t.login}</button>
				<button class="secondary" on:click={() => (showLogin = false)}>Cancel</button>
			</div>
		</div>
	</div>
{/if}

<main class="container">
	<slot />
</main>

<footer class="footer">
	<div class="container" style="text-align: center;">
		<p><strong>{t.creators}:</strong> Edgar Diaz, Grace Rivera, Estudiantes ESPE</p>
		<p style="color: var(--muted); font-size: 0.875rem;">{t.madeBy}</p>
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
