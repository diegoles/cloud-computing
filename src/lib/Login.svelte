<script>
	import { appStore } from '../store.js';
	import { translations } from './translations.js';
	export let t = translations.en;
	export let lang = 'en';

	let selectedEmail = '';

	function handleLogin() {
		appStore.update((s) => {
			const user = s.users.find((u) => u.email === selectedEmail);
			if (user) {
				return { ...s, currentUser: { ...user, lang } };
			}
			return s;
		});
	}

	appStore.subscribe((s) => {
		selectedEmail = s.currentUser?.email || '';
	});
</script>

<div class="card" style="max-width: 480px; margin: 2rem auto;">
	<h2 style="margin-bottom: 1rem; text-align: center;">{t.chooseRole}</h2>
	<div class="form-row">
		<label for="roleSelect">{t.email}</label>
		<select id="roleSelect" bind:value={selectedEmail}>
			{#each $appStore.users as user}
				<option value={user.email}>
					{user.name} — {user.role === 'admin' ? t.roleAdmin : t.roleStudent}
				</option>
			{/each}
		</select>
	</div>
	<button style="width: 100%;" on:click={handleLogin}>{t.login}</button>
</div>
