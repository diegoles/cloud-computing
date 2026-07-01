<script>
	import { createEventDispatcher } from 'svelte';
	import { appStore } from '../store.js';
	import { translations } from '$lib/translations.js';

	export let user = null;
	export let lang = 'en';
	$: t = translations[lang] || translations['en'];

	const dispatch = createEventDispatcher();

	// Mock questions about Cloud Computing Environment and Security Challenges
	const questions = [
		{
			id: 1,
			en: 'Which cloud model provides the highest level of control over the computing environment?',
			es: '¿Qué modelo de nube ofrece el mayor nivel de control sobre el entorno informático?',
			options: [
				{ en: 'Public Cloud', es: 'Nube Pública', correct: false },
				{ en: 'Private Cloud', es: 'Nube Privada', correct: true },
				{ en: 'Hybrid Cloud', es: 'Nube Híbrida', correct: false },
				{ en: 'Community Cloud', es: 'Nube Comunitaria', correct: false }
			]
		},
		{
			id: 2,
			en: 'What is a primary security challenge when moving school data to a public cloud?',
			es: '¿Cuál es un desafío de seguridad principal al mover datos escolares a una nube pública?',
			options: [
				{ en: 'Faster internet speed', es: 'Mayor velocidad de internet', correct: false },
				{ en: 'Data privacy and compliance', es: 'Privacidad de datos y cumplimiento', correct: true },
				{ en: 'Better hardware quality', es: 'Mejor calidad de hardware', correct: false },
				{ en: 'Unlimited storage', es: 'Almacenamiento ilimitado', correct: false }
			]
		},
		{
			id: 3,
			en: 'Which term describes giving each user only the permissions they need?',
			es: '¿Qué término describe dar a cada usuario solo los permisos que necesita?',
			options: [
				{ en: 'Single sign-on', es: 'Inicio de sesión único', correct: false },
				{ en: 'Multi-factor authentication', es: 'Autenticación multifactor', correct: false },
				{ en: 'Least privilege', es: 'Mínimo privilegio', correct: true },
				{ en: 'Data replication', es: 'Replicación de datos', correct: false }
			]
		},
		{
			id: 4,
			en: 'What does "IaaS" stand for in cloud computing?',
			es: '¿Qué significa "IaaS" en cloud computing?',
			options: [
				{ en: 'Internet as a Service', es: 'Internet como servicio', correct: false },
				{ en: 'Infrastructure as a Service', es: 'Infraestructura como servicio', correct: true },
				{ en: 'Integration as a Service', es: 'Integración como servicio', correct: false },
				{ en: 'Intelligence as a Service', es: 'Inteligencia como servicio', correct: false }
			]
		},
		{
			id: 5,
			en: 'Which practice helps protect cloud accounts from unauthorized access?',
			es: '¿Qué práctica ayuda a proteger las cuentas en la nube del acceso no autorizado?',
			options: [
				{ en: 'Using short passwords', es: 'Usar contraseñas cortas', correct: false },
				{ en: 'Sharing passwords by email', es: 'Compartir contraseñas por correo', correct: false },
				{ en: 'Multi-factor authentication', es: 'Autenticación multifactor', correct: true },
				{ en: 'Disabling encryption', es: 'Deshabilitar el cifrado', correct: false }
			]
		},
		{
			id: 6,
			en: 'A cloud environment that mixes on-premises infrastructure with public cloud services is called:',
			es: 'Un entorno de nube que mezcla infraestructura local con servicios de nube pública se llama:',
			options: [
				{ en: 'Public Cloud', es: 'Nube Pública', correct: false },
				{ en: 'Private Cloud', es: 'Nube Privada', correct: false },
				{ en: 'Hybrid Cloud', es: 'Nube Híbrida', correct: true },
				{ en: 'Distributed Cloud', es: 'Nube Distribuida', correct: false }
			]
		},
		{
			id: 7,
			en: 'Encrypting data while it travels between the school and the cloud is known as:',
			es: 'Cifrar datos mientras viajan entre la escuela y la nube se conoce como:',
			options: [
				{ en: 'Data at rest encryption', es: 'Cifrado de datos en reposo', correct: false },
				{ en: 'Data in transit encryption', es: 'Cifrado de datos en tránsito', correct: true },
				{ en: 'Data in use encryption', es: 'Cifrado de datos en uso', correct: false },
				{ en: 'Data masking', es: 'Enmascaramiento de datos', correct: false }
			]
		},
		{
			id: 8,
			en: 'Which of the following is an example of a SaaS application for education?',
			es: '¿Cuál de las siguientes es un ejemplo de aplicación SaaS para educación?',
			options: [
				{ en: 'Virtual machine on AWS', es: 'Máquina virtual en AWS', correct: false },
				{ en: 'Google Workspace for Education', es: 'Google Workspace for Education', correct: true },
				{ en: 'School-owned server rack', es: 'Rack de servidores propio de la escuela', correct: false },
				{ en: 'Custom Linux kernel', es: 'Kernel de Linux personalizado', correct: false }
			]
		},
		{
			id: 9,
			en: 'What is a "shared responsibility model" in cloud security?',
			es: '¿Qué es el "modelo de responsabilidad compartida" en seguridad en la nube?',
			options: [
				{ en: 'The cloud provider handles all security', es: 'El proveedor de nube maneja toda la seguridad', correct: false },
				{ en: 'The customer handles all security', es: 'El cliente maneja toda la seguridad', correct: false },
				{ en: 'Security duties are split between provider and customer', es: 'Las responsabilidades de seguridad se dividen entre proveedor y cliente', correct: true },
				{ en: 'All security is managed by a third party', es: 'Toda la seguridad es gestionada por un tercero', correct: false }
			]
		},
		{
			id: 10,
			en: 'Backing up school records in the cloud mainly helps with:',
			es: 'Hacer copias de seguridad de los registros escolares en la nube principalmente ayuda con:',
			options: [
				{ en: 'Faster gaming', es: 'Juegos más rápidos', correct: false },
				{ en: 'Disaster recovery and business continuity', es: 'Recuperación ante desastres y continuidad del negocio', correct: true },
				{ en: 'Improving screen resolution', es: 'Mejorar la resolución de pantalla', correct: false },
				{ en: 'Reducing teacher salaries', es: 'Reducir salarios de docentes', correct: false }
			]
		}
	];

	let answers = {};
	let submitted = false;
	let score = 0;
	let newPosition = null;

	$: currentQuestion = questions[activeIndex];
	let activeIndex = 0;

	function selectOption(qid, idx) {
		if (submitted) return;
		answers[qid] = idx;
	}

	function submitTest() {
		if (submitted) return;
		let correct = 0;
		questions.forEach((q) => {
			const chosen = answers[q.id];
			if (chosen !== undefined && q.options[chosen].correct) {
				correct++;
			}
		});
		score = Math.round((correct / questions.length) * 100);
		appStore.addTestResult({
			userId: user?.id || 0,
			userName: user?.name || 'Guest',
			score,
			date: new Date().toISOString().split('T')[0]
		});
		submitted = true;
	}

	function reset() {
		answers = {};
		submitted = false;
		score = 0;
		activeIndex = 0;
	}
</script>

<div class="card" style="max-width: 720px; margin: 0 auto;">
	{#if !submitted}
		<h2>{t.test}: Cloud Computing Environment and Security Challenges</h2>
		<div class="progress" style="margin: 1rem 0;">
			{t.question} {activeIndex + 1} {t.of} {questions.length}
			<progress value={activeIndex + 1} max={questions.length} style="width: 100%; margin-top: 0.5rem;"></progress>
		</div>

		{#each questions as q, i (q.id)}
			{#if i === activeIndex}
				<div class="question-block">
					<p class="question-text">{q[lang] || q.en}</p>
					<div class="options">
						{#each q.options as opt, idx}
							<button
								class="option"
								class:selected={answers[q.id] === idx}
								on:click={() => selectOption(q.id, idx)}
							>
								{opt[lang] || opt.en}
							</button>
						{/each}
					</div>
				</div>
			{/if}
		{/each}

		<div style="display: flex; justify-content: space-between; margin-top: 1.5rem;">
			<button class="secondary" disabled={activeIndex === 0} on:click={() => activeIndex--}>Previous</button>
			{#if activeIndex < questions.length - 1}
				<button class="secondary" on:click={() => activeIndex++}>Next</button>
			{:else}
				<button on:click={submitTest}>{t.submit}</button>
			{/if}
		</div>
	{:else}
		<div class="result" style="text-align: center;">
			<h2>{t.yourScore}</h2>
			<div class="score-circle" style="margin: 1.5rem auto;">{score}%</div>
			<p style="color: var(--muted); margin-bottom: 1.5rem;">
				{#if score >= 90}
					Excellent! You have a strong understanding of cloud environments and security.
				{:else if score >= 70}
					Good job! Keep reviewing the security topics.
				{:else}
					Keep studying cloud security and try again.
				{/if}
			</p>
			<p>Your score has been added to the global ranking.</p>
			<div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.5rem;">
				<button on:click={reset}>{t.retake}</button>
				<a href="/ranking" class="btn success">{t.ranking}</a>
				<button class="secondary" on:click={() => dispatch('finish')}>{t.backToDashboard}</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.question-text {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	.options {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.option {
		justify-content: flex-start;
		background: #f8fafc;
		color: var(--text);
		border: 2px solid var(--border);
		padding: 0.75rem 1rem;
		text-align: left;
		font-weight: 500;
	}
	.option:hover {
		background: #eff6ff;
		border-color: var(--primary);
	}
	.option.selected {
		background: #dbeafe;
		border-color: var(--primary);
		color: var(--primary-dark);
	}
	.score-circle {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: var(--primary);
		color: white;
		display: grid;
		place-items: center;
		font-size: 2rem;
		font-weight: 800;
	}
</style>
