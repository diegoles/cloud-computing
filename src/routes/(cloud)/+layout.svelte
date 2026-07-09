<script>
	import '../../app.css';
	import { appStore } from '../../store.js';
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
		appStore.setCurrentUser($appStore.users[0]);
		showLogin = false;
	}

	function getInitials(name) {
		return name ? name.split(' ').map((n) => n[0]).join('').toUpperCase() : 'U';
	}

	function handleUserSelect(e) {
		const selected = $appStore.users.find((u) => u.email === e.target.value);
		if (selected) appStore.setCurrentUser(selected);
	}
</script>

<nav class="nav-bar">
	<div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
		<a href="/" class="brand">{t.appName}</a>
		<div class="nav-links">
			<a href="/" class:active={$page.url.pathname === '/'}>{t.home}</a>
			<a href="/dashboard" class:active={$page.url.pathname === '/dashboard'}>Dashboard</a>
			<a href="/estudiante" class:active={$page.url.pathname === '/estudiante'}>{t.student}</a>
			<a href="/admin" class:active={$page.url.pathname === '/admin'}>{t.admin}</a>
			<a href="/exams" class:active={$page.url.pathname === '/exams'}>{t.exams}</a>
			<a href="/grading" class:active={$page.url.pathname === '/grading'}>{t.grading}</a>
			<a href="/communication" class:active={$page.url.pathname === '/communication'}>{t.communication}</a>
			<a href="/admin-tasks" class:active={$page.url.pathname === '/admin-tasks'}>{t.adminTasks}</a>
			<a href="/ranking" class:active={$page.url.pathname === '/ranking'}>{t.ranking}</a>
		</div>
		<div class="nav-actions">
			<div class="lang-switch">
				<button class="secondary" class:active={lang === 'en'} on:click={() => setLanguage('en')}>EN</button>
				<button class="secondary" class:active={lang === 'es'} on:click={() => setLanguage('es')}>ES</button>
			</div>
			<button class="user-menu-trigger" on:click={() => (showLogin = !showLogin)}>
				<span class="user-avatar">{getInitials(user?.name || 'User')}</span>
				<span class="user-name">{user?.name}</span>
				<span class="user-role">{user?.role}</span>
			</button>
		</div>
	</div>
</nav>

{#if showLogin}
	<div class="modal-overlay" on:click={() => (showLogin = false)}>
		<div class="modal card user-modal" on:click|stopPropagation>
			<div class="modal-header">
				<h2>{t.login}</h2>
				<button class="close-btn" on:click={() => (showLogin = false)}>×</button>
			</div>
			<div class="current-user-info">
				<div class="user-avatar large">{getInitials(user?.name)}</div>
				<div>
					<strong>{user?.name}</strong>
					<span class="user-email">{user?.email}</span>
					<span class="badge" class:success={isAdmin} class:warning={isStudent}>{isAdmin ? t.roleAdmin : t.roleStudent}</span>
				</div>
			</div>
			<div class="form-row">
				<label for="roleSelect">{t.chooseRole}</label>
				<select id="roleSelect" value={user?.email} on:change={handleUserSelect}>
					{#each $appStore.users as u}
						<option value={u.email}>{u.name} ({u.email}) — {u.role === 'admin' ? t.roleAdmin : t.roleStudent}</option>
					{/each}
				</select>
			</div>
			<div class="modal-actions">
				<button class="success" on:click={() => (showLogin = false)}>{t.login}</button>
				<button class="danger" on:click={logout}>{t.logout}</button>
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
	.nav-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.lang-switch {
		display: inline-flex;
		gap: 0.25rem;
		background: var(--bg);
		padding: 0.2rem;
		border-radius: 0.5rem;
	}
	.lang-switch button {
		padding: 0.35rem 0.6rem;
		font-size: 0.75rem;
		border-radius: 0.35rem;
	}
	.lang-switch button.active {
		background: var(--primary);
		color: white;
	}
	.user-menu-trigger {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.75rem 0.35rem 0.35rem;
		background: var(--bg);
		color: var(--text);
		border: 1px solid var(--border);
		border-radius: 2rem;
		font-weight: 600;
		font-size: 0.85rem;
	}
	.user-menu-trigger:hover {
		background: var(--border);
	}
	.user-avatar {
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 50%;
		background: var(--primary);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.7rem;
		font-weight: 700;
		flex-shrink: 0;
	}
	.user-avatar.large {
		width: 3.5rem;
		height: 3.5rem;
		font-size: 1.25rem;
	}
	.user-name {
		max-width: 120px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.user-role {
		font-size: 0.7rem;
		color: var(--muted);
		text-transform: capitalize;
		background: var(--border);
		padding: 0.15rem 0.4rem;
		border-radius: 0.75rem;
	}
	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		padding: 1rem;
	}
	.modal {
		max-width: 420px;
		width: 100%;
		position: relative;
	}
	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.25rem;
	}
	.modal-header h2 {
		margin: 0;
		font-size: 1.25rem;
	}
	.close-btn {
		background: transparent;
		color: var(--muted);
		font-size: 1.5rem;
		padding: 0;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}
	.close-btn:hover {
		background: var(--border);
	}
	.current-user-info {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--bg);
		border-radius: 0.75rem;
		margin-bottom: 1.25rem;
	}
	.current-user-info > div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.user-email {
		font-size: 0.85rem;
		color: var(--muted);
	}
	.modal-actions {
		display: flex;
		gap: 0.75rem;
		margin-top: 1.25rem;
	}
	.modal-actions button {
		flex: 1;
	}
	.footer {
		border-top: 1px solid var(--border);
		padding: 2rem 1rem;
		margin-top: 2rem;
		background: var(--surface);
	}
</style>
