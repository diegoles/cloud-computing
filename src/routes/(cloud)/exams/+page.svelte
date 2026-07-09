<script>
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

	let activeExam = null;
	let answers = {};
	let submitted = false;
	let score = 0;

	function startExam(exam) {
		activeExam = exam;
		answers = {};
		submitted = false;
		score = 0;
	}

	function submitExam() {
		if (!activeExam) return;
		let correct = 0;
		activeExam.questions.forEach((q, index) => {
			if (answers[index] === q.correct) correct++;
		});
		score = Math.round((correct / activeExam.questions.length) * 100);
		submitted = true;

		const status = score >= 60 ? 'passed' : 'failed';
		appStore.addGrade({
			userId: user.id,
			userName: user.name,
			examId: activeExam.id,
			examTitle: activeExam.title,
			score,
			feedback: score >= 80 ? 'Great job!' : score >= 60 ? 'Good, review weak areas.' : 'Needs review.',
			status,
			date: new Date().toISOString().split('T')[0]
		});
	}

	function resetExam() {
		activeExam = null;
		answers = {};
		submitted = false;
		score = 0;
	}
</script>

<svelte:head>
	<title>{t.exams} | {t.appName}</title>
</svelte:head>

{#if !activeExam}
	<h1>{t.exams}</h1>
	<p style="color: var(--muted); margin-bottom: 1.5rem;">Choose an exam and get instant results.</p>

	<div class="grid-2">
		{#each $appStore.exams as exam}
			<div class="card">
				<h2>{exam.title}</h2>
				<p style="color: var(--muted); margin-bottom: 1rem;">{exam.subject} • {exam.questions.length} {t.question}s</p>
				<button on:click={() => startExam(exam)}>{t.startExam}</button>
			</div>
		{/each}
	</div>
{:else}
	<div class="card" style="max-width: 720px; margin: 0 auto;">
		<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
			<h1>{activeExam.title}</h1>
			<button class="secondary" on:click={resetExam}>← {t.backToDashboard}</button>
		</div>

		{#if !submitted}
			{#each activeExam.questions as q, index}
				<div class="card" style="margin-bottom: 1rem;">
					<h3>{t.question} {index + 1} {t.of} {activeExam.questions.length}</h3>
					<p style="margin-bottom: 1rem;">{q.question}</p>
					<div style="display: flex; flex-direction: column; gap: 0.5rem;">
						{#each q.options as option, optIndex}
							<label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border: 1px solid var(--border); border-radius: 0.5rem; cursor: pointer;">
								<input type="radio" name="question{index}" value={optIndex} bind:group={answers[index]} />
								<span>{option}</span>
							</label>
						{/each}
					</div>
				</div>
			{/each}
			<button on:click={submitExam} disabled={Object.keys(answers).length !== activeExam.questions.length}>{t.submit}</button>
		{:else}
			<div class="card" style="text-align: center;">
				<h2>{t.yourScore}: {score}%</h2>
				<p style="color: var(--muted); margin: 1rem 0;">
					{score >= 80 ? 'Great job!' : score >= 60 ? 'Good, review weak areas.' : 'Needs review.'}
				</p>
				<button on:click={resetExam}>{t.retake}</button>
				<a href="/grading" class="btn secondary" style="margin-left: 0.5rem;">View Grades</a>
			</div>
		{/if}
	</div>
{/if}
