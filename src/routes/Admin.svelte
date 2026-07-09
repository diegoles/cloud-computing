<script>
	import { appStore } from '../store.js';
	import { translations } from '$lib/translations.js';
	import MaterialUploader from '../lib/MaterialUploader.svelte';

	export let lang = 'en';
	$: t = translations[lang] || translations['en'];

	let newName = '';
	let newEmail = '';
	let newRole = 'student';
	let activeTab = 'users';

	let newExamTitle = '';
	let newExamSubject = '';
	let newQuestionText = '';
	let newQuestionOptions = ['', '', '', ''];
	let newQuestionCorrect = 0;
	let examQuestions = [];

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

	function addQuestion() {
		if (!newQuestionText.trim() || newQuestionOptions.some((o) => !o.trim())) return;
		examQuestions = [...examQuestions, {
			id: examQuestions.length + 1,
			question: newQuestionText.trim(),
			options: newQuestionOptions.map((o) => o.trim()),
			correct: parseInt(newQuestionCorrect)
		}];
		newQuestionText = '';
		newQuestionOptions = ['', '', '', ''];
		newQuestionCorrect = 0;
	}

	function saveExam() {
		if (!newExamTitle.trim() || !newExamSubject.trim() || examQuestions.length === 0) return;
		appStore.addExam({
			title: newExamTitle.trim(),
			subject: newExamSubject.trim(),
			questions: examQuestions
		});
		newExamTitle = '';
		newExamSubject = '';
		examQuestions = [];
	}

	function removeExam(id) {
		appStore.removeExam(id);
	}

	function updateGradeStatus(grade, status) {
		appStore.updateGrade(grade.id, { status });
	}
</script>

<h1>{t.admin}</h1>

<div class="card" style="margin-bottom: 1.5rem;">
	<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
		<button class:secondary={activeTab !== 'users'} on:click={() => (activeTab = 'users')}>{t.students}</button>
		<button class:secondary={activeTab !== 'exams'} on:click={() => (activeTab = 'exams')}>{t.exams}</button>
		<button class:secondary={activeTab !== 'grades'} on:click={() => (activeTab = 'grades')}>{t.grading}</button>
		<button class:secondary={activeTab !== 'materials'} on:click={() => (activeTab = 'materials')}>{t.materials}</button>
	</div>
</div>

{#if activeTab === 'users'}
	<div class="card">
		<h2>{t.students}</h2>
		<div class="grid-2" style="margin-bottom: 1rem;">
			<div class="form-row">
				<label for="adminName">{t.name}</label>
				<input id="adminName" bind:value={newName} placeholder={t.name} />
			</div>
			<div class="form-row">
				<label for="adminEmail">{t.email}</label>
				<input id="adminEmail" type="email" bind:value={newEmail} placeholder={t.email} />
			</div>
		</div>
		<div class="form-row" style="max-width: 200px;">
			<label for="adminRole">{t.role}</label>
			<select id="adminRole" bind:value={newRole}>
				<option value="student">{t.roleStudent}</option>
				<option value="admin">{t.roleAdmin}</option>
			</select>
		</div>
		<button on:click={addUser} style="margin-top: 1rem;">{t.addStudent}</button>

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
{:else if activeTab === 'exams'}
	<div class="card">
		<h2>{t.manageExams}</h2>
		<div class="grid-2" style="margin-bottom: 1rem;">
			<div class="form-row">
				<label for="examTitle">{t.examTitle}</label>
				<input id="examTitle" bind:value={newExamTitle} placeholder={t.examTitle} />
			</div>
			<div class="form-row">
				<label for="examSubject">{t.examSubject}</label>
				<input id="examSubject" bind:value={newExamSubject} placeholder={t.examSubject} />
			</div>
		</div>

		<h3 style="margin-top: 1.5rem;">{t.addQuestion}</h3>
		<div class="form-row">
			<label for="questionText">{t.questionText}</label>
			<input id="questionText" bind:value={newQuestionText} placeholder={t.questionText} />
		</div>
		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
			{#each newQuestionOptions as option, index}
				<div class="form-row">
					<label for="option{index}">Option {index + 1}</label>
					<input id="option{index}" bind:value={newQuestionOptions[index]} placeholder="Option {index + 1}" />
				</div>
			{/each}
		</div>
		<div class="form-row" style="max-width: 200px;">
			<label for="correctOption">{t.correctOption}</label>
			<select id="correctOption" bind:value={newQuestionCorrect}>
				{#each newQuestionOptions as _, index}
					<option value={index}>Option {index + 1}</option>
				{/each}
			</select>
		</div>
		<button on:click={addQuestion} style="margin-top: 1rem; margin-right: 0.5rem;">{t.addQuestion}</button>
		<button on:click={saveExam} class="success" disabled={!newExamTitle.trim() || !newExamSubject.trim() || examQuestions.length === 0} style="margin-top: 1rem;">{t.submit}</button>

		{#if examQuestions.length > 0}
			<div class="card" style="margin-top: 1.5rem; background: var(--surface);">
				<h3>{t.examPreview} ({examQuestions.length} {t.question}s)</h3>
				{#each examQuestions as q, index}
					<p style="margin-bottom: 0.5rem;"><strong>{index + 1}.</strong> {q.question}</p>
				{/each}
			</div>
		{/if}

		<h3 style="margin-top: 2rem;">{t.existingExams}</h3>
		<table>
			<thead>
				<tr>
					<th>{t.examTitle}</th>
					<th>{t.examSubject}</th>
					<th>{t.question}s</th>
					<th>{t.actions}</th>
				</tr>
			</thead>
			<tbody>
				{#each $appStore.exams as exam}
					<tr>
						<td>{exam.title}</td>
						<td>{exam.subject}</td>
						<td>{exam.questions.length}</td>
						<td>
							<button class="danger" style="padding: 0.35rem 0.6rem; font-size: 0.8rem;" on:click={() => removeExam(exam.id)}>{t.delete}</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else if activeTab === 'grades'}
	<div class="card">
		<h2>{t.grading}</h2>
		<table>
			<thead>
				<tr>
					<th>{t.studentName}</th>
					<th>{t.exams}</th>
					<th>{t.score}</th>
					<th>{t.status}</th>
					<th>{t.feedback}</th>
					<th>{t.date}</th>
					<th>{t.actions}</th>
				</tr>
			</thead>
			<tbody>
				{#each $appStore.grades as grade}
					<tr>
						<td>{grade.userName}</td>
						<td>{grade.examTitle}</td>
						<td>{grade.score}%</td>
						<td>
							<span class="badge" class:success={grade.status === 'passed'} class:danger={grade.status === 'failed'}>{grade.status === 'passed' ? t.passed : t.failed}</span>
						</td>
						<td>{grade.feedback}</td>
						<td>{grade.date}</td>
						<td>
							<button class="success" style="padding: 0.35rem 0.6rem; font-size: 0.8rem;" on:click={() => updateGradeStatus(grade, 'passed')}>{t.passed}</button>
							<button class="danger" style="padding: 0.35rem 0.6rem; font-size: 0.8rem;" on:click={() => updateGradeStatus(grade, 'failed')}>{t.failed}</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else if activeTab === 'materials'}
	<div class="card">
		<h2>{t.materials}</h2>
		<MaterialUploader {t} {lang} />
	</div>
{/if}
