<script>
	import Admin from '../Admin.svelte';
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
	<title>{t.admin} | {t.appName}</title>
</svelte:head>

{#if user?.role === 'admin'}
	<Admin {user} {lang} />
{:else}
	<div class="card" style="text-align: center; max-width: 520px; margin: 4rem auto;">
		<h2>Access Denied</h2>
		<p style="color: var(--muted); margin: 1rem 0;">This area is reserved for administrators. Please log in as an admin.</p>
		<a href="/" class="btn">Back to Home</a>
	</div>
{/if}
