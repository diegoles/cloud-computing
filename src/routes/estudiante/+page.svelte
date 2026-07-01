<script>
	import Estudiante from '../Estudiante.svelte';
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
	<title>{t.student} | {t.appName}</title>
</svelte:head>

<Estudiante {user} {lang} />
