<script>
	import Admin from '../../Admin.svelte';
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

	function loginAsAdmin() {
		const admin = $appStore.users.find((u) => u.role === 'admin');
		if (admin) appStore.setCurrentUser(admin);
	}

	function loginAsStudent() {
		const student = $appStore.users.find((u) => u.role === 'student');
		if (student) appStore.setCurrentUser(student);
	}

	function loginAsSelectedUser(e) {
		const selected = $appStore.users.find((u) => u.email === e.target.value);
		if (selected) appStore.setCurrentUser(selected);
	}

	let isAdmin = user?.role === 'admin';
	$: isAdmin = user?.role === 'admin';
</script>

<svelte:head>
	<title>{t.admin} | {t.appName}</title>
</svelte:head>

{#if !isAdmin}
	<div class="card demo-banner" style="margin-bottom: 1rem;">
		<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
			<div>
				<strong>Demo Mode</strong>
				<p style="margin: 0; color: var(--muted); font-size: 0.9rem;">You are viewing the admin panel as a preview. Switch to an admin account to unlock all management features.</p>
			</div>
			<div style="display: flex; gap: 0.5rem; align-items: center;">
				<label for="adminRoleSwitch" style="font-size: 0.9rem; white-space: nowrap;">Switch role:</label>
				<select id="adminRoleSwitch" value={user?.email} on:change={loginAsSelectedUser} style="width: auto; min-width: 220px;">
					{#each $appStore.users as u}
						<option value={u.email}>{u.name} ({u.email}) — {u.role}</option>
					{/each}
				</select>
				<button class="success" on:click={loginAsAdmin}>Admin Access</button>
			</div>
		</div>
	</div>
{/if}

<Admin {lang} />

<div class="card" style="text-align: center; margin-top: 1rem;">
	<div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
		<span style="color: var(--muted); font-size: 0.9rem;">Current user: <strong>{user?.name}</strong> ({user?.role})</span>
		{#if isAdmin}
			<button class="secondary" on:click={loginAsStudent}>← Switch to Student</button>
		{:else}
			<button class="success" on:click={loginAsAdmin}>Switch to Admin</button>
		{/if}
	</div>
</div>

<style>
	.demo-banner {
		background: linear-gradient(90deg, #fef3c7, #fffbeb);
		border: 1px solid #fbbf24;
	}
	.demo-banner strong {
		color: #92400e;
	}
</style>
