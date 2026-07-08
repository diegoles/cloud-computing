<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { teachingStore } from './store.js';
	import { translations } from './translations.js';

	export let quiz = { questions: [] };
	export let user = null;
	export let lang = 'en';

	$: t = translations[lang] || translations['en'];

	const dispatch = createEventDispatcher();

	let answers = {};
	let activeIndex = 0;
	let submitted = false;
	let score = 0;
	let showExplanation = null;

	$: currentQuestion = quiz.questions[activeIndex];
	$: total = quiz.questions.length;

	function selectOption(qid, idx) {
		if (submitted) return;
		answers[qid] = idx;
		showExplanation = null;
	}

	function submitQuiz() {
		if (submitted) return;
		let correct = 0;
		quiz.questions.forEach((q) => {
			const chosen = answers[q.id];
			if (chosen !== undefined && q.options[chosen].correct) {
				correct++;
			}
		});
		score = Math.round((correct / total) * 100);
		teachingStore.addResult({
			quizId: quiz.id,
			userId: user?.id || 0,
			userName: user?.name || 'Guest',
			score,
			date: new Date().toISOString().split('T')[0]
		});
		submitted = true;
	}

	function reset() {
		answers = {};
		activeIndex = 0;
		submitted = false;
		score = 0;
		showExplanation = null;
	}

	function toggleExplanation(idx) {
		showExplanation = showExplanation === idx ? null : idx;
	}
</script>

<div class="card" style="max-width: 760px; margin: 0 auto;">
	{#if !submitted}
		<h2>{quiz[lang]?.title || quiz.en?.title}</h2>
		<p style="color: var(--muted); margin-bottom: 1rem;">{quiz[lang]?.description || quiz.en?.description}</p>

		<div class="progress" style="margin: 1rem 0;">
			{t.question} {activeIndex + 1} {t.of} {total}
			<progress value={activeIndex + 1} max={total} style="width: 100%; margin-top: 0.5rem;"></progress>
		</div>

		{#each quiz.questions as q, i (q.id)}
			{#if i === activeIndex}
				<div class="question-block" transition:fade>
					<p class="question-text">{q[lang] || q.en}</p>
					<div class="options">
						{#each q.options as opt, idx}
							<button
								type="button"
								class="option"
								class:selected={answers[q.id] === idx}
								on:click={() => selectOption(q.id, idx)}
							>
								{opt[lang] || opt.en}
							</button>
						{/each}
					</div>
					{#if answers[q.id] !== undefined}
						<button type="button" class="secondary" style="margin-top: 0.75rem;" on:click={() => toggleExplanation(answers[q.id])}>
							{showExplanation === answers[q.id] ? t.hideExplanation : t.whyCorrect}
						</button>
						{#if showExplanation === answers[q.id]}
							<div class="explanation">
								<p>{q.options[answers[q.id]].correct ? (q.explanation[lang] || q.explanation.en) : t.incorrectChoice}</p>
							</div>
						{/if}
					{/if}
				</div>
			{/if}
		{/each}

		<div style="display: flex; justify-content: space-between; margin-top: 1.5rem;">
			<button class="secondary" disabled={activeIndex === 0} on:click={() => activeIndex--}>{t.previous}</button>
			{#if activeIndex < total - 1}
				<button class="secondary" on:click={() => activeIndex++}>{t.next}</button>
			{:else}
				<button on:click={submitQuiz}>{t.submit}</button>
			{/if}
		</div>
	{:else}
		<div class="result" style="text-align: center;">
			<h2>{t.yourScore}</h2>
			<div class="score-circle" style="margin: 1.5rem auto;">{score}%</div>
			<p style="color: var(--muted); margin-bottom: 1.5rem;">
				{#if score >= 90}
					{t.xcellent}
				{:else if score >= 70}
					{t.good}
				{:else}
					{t.keepStudying}
				{/if}
			</p>
			<p>{t.rankingAdded}</p>

			<div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap;">
				<button on:click={reset}>{t.retake}</button>
				<a href="/teaching-vocabulary/ranking" class="btn success">{t.ranking}</a>
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
	.explanation {
		background: #f0f9ff;
		border-left: 4px solid var(--accent);
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		margin-top: 0.75rem;
		color: #0c4a6e;
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
