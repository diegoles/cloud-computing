<script>
	import { appStore } from '../store.js';
	import { translations } from './translations.js';

	let t = translations['en'];
	let user = $appStore.currentUser;
	let lang = user?.lang || 'en';

	appStore.subscribe((s) => {
		user = s.currentUser;
		lang = user?.lang || 'en';
		t = translations[lang] || translations['en'];
	});

	$: grades = $appStore.grades;
	$: exams = $appStore.exams;
	$: users = $appStore.users;
	$: tasks = $appStore.adminTasks;
	$: messages = $appStore.messages;

	$: totalStudents = users.filter((u) => u.role === 'student').length;
	$: totalExams = exams.length;
	$: averageScore = grades.length ? Math.round(grades.reduce((a, b) => a + b.score, 0) / grades.length) : 0;
	$: passedCount = grades.filter((g) => g.status === 'passed').length;
	$: failedCount = grades.filter((g) => g.status === 'failed').length;
	$: pendingTasks = tasks.filter((t) => t.status === 'pending').length;
	$: completedTasks = tasks.filter((t) => t.status === 'completed').length;
	$: unreadMessages = messages.filter((m) => m.recipientId === user?.id && !m.read).length;

	$: scoreDistribution = {
		'90-100': grades.filter((g) => g.score >= 90).length,
		'80-89': grades.filter((g) => g.score >= 80 && g.score < 90).length,
		'70-79': grades.filter((g) => g.score >= 70 && g.score < 80).length,
		'60-69': grades.filter((g) => g.score >= 60 && g.score < 70).length,
		'0-59': grades.filter((g) => g.score < 60).length
	};

	$: maxScoreCount = Math.max(...Object.values(scoreDistribution), 1);
	$: passRate = grades.length ? Math.round((passedCount / grades.length) * 100) : 0;

	function getInitials(name) {
		return name.split(' ').map((n) => n[0]).join('').toUpperCase();
	}

	function getScoreColor(score) {
		if (score >= 80) return 'var(--success, #22c55e)';
		if (score >= 60) return 'var(--warning, #f59e0b)';
		return 'var(--danger, #ef4444)';
	}
</script>

<div class="dashboard">
	<div class="dashboard-header">
		<div>
			<h1>{t.welcome}, {user?.name || 'User'}</h1>
			<p style="color: var(--muted); margin-top: 0.25rem;">{user?.email} • {user?.role}</p>
		</div>
		<div class="dashboard-actions">
			<a href="/exams" class="btn">{t.startExam}</a>
			<a href="/communication" class="btn secondary">{t.communication}</a>
		</div>
	</div>

	<div class="stats-grid">
		<div class="stat-card">
			<div class="stat-icon" style="background: #dbeafe; color: #2563eb;">📊</div>
			<div class="stat-content">
				<span class="stat-value">{averageScore}%</span>
				<span class="stat-label">{t.average} {t.score}</span>
			</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon" style="background: #dcfce7; color: #16a34a;">✅</div>
			<div class="stat-content">
				<span class="stat-value">{passRate}%</span>
				<span class="stat-label">{t.passed} Rate</span>
			</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon" style="background: #fef3c7; color: #d97706;">📝</div>
			<div class="stat-content">
				<span class="stat-value">{totalExams}</span>
				<span class="stat-label">{t.exams}</span>
			</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon" style="background: #f3e8ff; color: #9333ea;">👥</div>
			<div class="stat-content">
				<span class="stat-value">{totalStudents}</span>
				<span class="stat-label">{t.students}</span>
			</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon" style="background: #fee2e2; color: #dc2626;">⚠️</div>
			<div class="stat-content">
				<span class="stat-value">{pendingTasks}</span>
				<span class="stat-label">{t.pending} {t.adminTasks}</span>
			</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon" style="background: #e0e7ff; color: #4f46e5;">💬</div>
			<div class="stat-content">
				<span class="stat-value">{unreadMessages}</span>
				<span class="stat-label">{t.communication}</span>
			</div>
		</div>
	</div>

	<div class="charts-grid">
		<div class="card chart-card">
			<h2>{t.score} {t.distribution || 'Distribution'}</h2>
			<div class="bar-chart">
				{#each Object.entries(scoreDistribution) as [range, count]}
					<div class="bar-item">
						<span class="bar-label">{range}</span>
						<div class="bar-wrapper">
							<div class="bar" style="height: {(count / maxScoreCount) * 100}%; background: {getScoreColor(parseInt(range))};"></div>
						</div>
						<span class="bar-value">{count}</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="card chart-card">
			<h2>{t.passed} vs {t.failed}</h2>
			<div class="donut-chart-wrapper">
				<svg class="donut-chart" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" stroke-width="12" />
					{#if grades.length > 0}
						{@const circumference = 2 * Math.PI * 40}
						{@const passOffset = circumference - (passedCount / grades.length) * circumference}
						<circle
							cx="50"
							cy="50"
							r="40"
							fill="none"
							stroke="#22c55e"
							stroke-width="12"
							stroke-dasharray={circumference}
							stroke-dashoffset={passOffset}
							transform="rotate(-90 50 50)"
							style="transition: stroke-dashoffset 0.5s ease;"
						/>
					{/if}
				</svg>
				<div class="donut-center">
					<span class="donut-value">{passRate}%</span>
					<span class="donut-label">{t.passed} Rate</span>
				</div>
			</div>
			<div class="chart-legend">
				<div class="legend-item">
					<span class="legend-color" style="background: #22c55e;"></span>
					<span>{t.passed} ({passedCount})</span>
				</div>
				<div class="legend-item">
					<span class="legend-color" style="background: #ef4444;"></span>
					<span>{t.failed} ({failedCount})</span>
				</div>
			</div>
		</div>
	</div>

	<div class="dashboard-grid">
		<div class="card">
			<h2>{t.recentGrades || 'Recent Grades'}</h2>
			<table style="margin-top: 1rem;">
				<thead>
					<tr>
						<th>{t.studentName}</th>
						<th>{t.exams}</th>
						<th>{t.score}</th>
						<th>{t.status}</th>
					</tr>
				</thead>
				<tbody>
					{#each grades.slice(0, 5) as grade}
						<tr>
							<td>
								<div style="display: flex; align-items: center; gap: 0.5rem;">
									<span class="avatar-small">{getInitials(grade.userName)}</span>
									{grade.userName}
								</div>
							</td>
							<td>{grade.examTitle}</td>
							<td>{grade.score}%</td>
							<td>
								<span class="badge" class:success={grade.status === 'passed'} class:danger={grade.status === 'failed'}>
									{grade.status === 'passed' ? t.passed : t.failed}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="card">
			<h2>{t.adminTasks}</h2>
			<ul style="margin-top: 1rem; list-style: none; padding: 0;">
				{#each tasks.slice(0, 5) as task}
					<li style="padding: 0.75rem; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
						<div style="display: flex; align-items: center; gap: 0.75rem;">
							<input type="checkbox" checked={task.status === 'completed'} disabled />
							<span style={task.status === 'completed' ? 'text-decoration: line-through; opacity: 0.7;' : ''}>{task.title}</span>
						</div>
						<span class="badge" class:danger={task.priority === 'high'} class:warning={task.priority === 'medium'} class:success={task.priority === 'low'}>
							{task.priority === 'high' ? t.high : task.priority === 'medium' ? t.medium : t.low}
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.dashboard {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.dashboard-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.dashboard-header h1 {
		font-size: 1.75rem;
		margin: 0;
	}
	.dashboard-actions {
		display: flex;
		gap: 0.75rem;
	}
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
	.stat-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 1rem;
		padding: 1.25rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		box-shadow: 0 1px 3px rgba(0,0,0,0.05);
	}
	.stat-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
	}
	.stat-content {
		display: flex;
		flex-direction: column;
	}
	.stat-value {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text);
	}
	.stat-label {
		font-size: 0.85rem;
		color: var(--muted);
	}
	.charts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1rem;
	}
	.chart-card {
		padding: 1.5rem;
	}
	.chart-card h2 {
		margin-bottom: 1.25rem;
		font-size: 1.1rem;
	}
	.bar-chart {
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		gap: 1rem;
		height: 220px;
		padding: 1rem 0;
	}
	.bar-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		flex: 1;
	}
	.bar-label {
		font-size: 0.75rem;
		color: var(--muted);
		font-weight: 600;
	}
	.bar-wrapper {
		width: 40px;
		height: 150px;
		background: var(--border);
		border-radius: 0.5rem;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
	}
	.bar {
		width: 100%;
		border-radius: 0.5rem 0.5rem 0 0;
		transition: height 0.5s ease;
		min-height: 4px;
	}
	.bar-value {
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--text);
	}
	.donut-chart-wrapper {
		position: relative;
		width: 200px;
		height: 200px;
		margin: 0 auto;
	}
	.donut-chart {
		width: 100%;
		height: 100%;
		transform: rotate(-90deg);
	}
	.donut-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.donut-value {
		display: block;
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--text);
	}
	.donut-label {
		display: block;
		font-size: 0.8rem;
		color: var(--muted);
	}
	.chart-legend {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 1.5rem;
	}
	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
	}
	.legend-color {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}
	.dashboard-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1rem;
	}
	.avatar-small {
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
	}

	@media (max-width: 640px) {
		.dashboard-header {
			flex-direction: column;
			align-items: flex-start;
		}
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
