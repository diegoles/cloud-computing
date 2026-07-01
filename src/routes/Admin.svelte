<script>
	import { appStore } from '../store.js';
	import { translations } from '$lib/translations.js';
	import MaterialUploader from '../lib/MaterialUploader.svelte';

	export let user = null;
	export let lang = 'en';
	$: t = translations[lang] || translations['en'];

	let newName = '';
	let newEmail = '';
	let newRole = 'student';

	function addUser() {
		if (!newName.trim() || !newEmail.trim()) return;
		appStore.addUser({ name: newName.trim(), email: newEmail.trim(), role: newRole, lang });
		newName = '';
		newEmail = '';
		newRole = 'student';
	}

	function removeUser(id) {
		appStore.removeUser(id);
	}
</script>

<h1>{t.admin}</h1>

<div class="grid-2">
	<div class="card">
		<h2>{t.students}</h2>
		<div class="form-row">
			<label for="adminName">{t.name}</label>
			<input id="adminName" bind:value={newName} placeholder={t.name} />
		</div>
		<div class="form-row">
			<label for="adminEmail">{t.email}</label>
			<input id="adminEmail" type="email" bind:value={newEmail} placeholder={t.email} />
		</div>
		<div class="form-row">
			<label for="adminRole">{t.role}</label>
			<select id="adminRole" bind:value={newRole}>
				<option value="student">{t.roleStudent}</option>
				<option value="admin">{t.roleAdmin}</option>
			</select>
		</div>
		<button on:click={addUser}>{t.addStudent}</button>

		<table style="margin-top: 1.5rem;">
			<thead>
				<tr>
					<th>{t.name}</th>
					<th>{t.email}</th>
					<th>{t.role}</th>
					<th>{t.actions}</th>
				</tr>
			</thead>
			<tbody>
				{#each $appStore.users as u}
					<tr>
						<td>{u.name}</td>
						<td>{u.email}</td>
						<td><span class="badge" class:success={u.role === 'admin'}>{u.role}</span></td>
						<td>
							{#if u.id !== 99}
								<button class="danger" style="padding: 0.35rem 0.6rem; font-size: 0.8rem;" on:click={() => removeUser(u.id)}>{t.delete}</button>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="card">
		<h2>{t.materials}</h2>
		<MaterialUploader {t} {lang} />
	</div>
</div>

<div class="card" style="margin-top: 1rem;">
	<h2>{t.adminTasks}</h2>
	<p style="color: var(--muted);">{t.featureAdmin}</p>
	<ul>
		<li>Manage users and roles</li>
		<li>Upload study materials</li>
		<li>Monitor exam results and rankings</li>
		<li>Communicate with teachers and staff</li>
	</ul>
</div>
