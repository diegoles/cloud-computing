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

	let newTaskTitle = '';
	let newTaskPriority = 'medium';
	let newTaskDueDate = '';

	function addTask() {
		if (!newTaskTitle.trim() || !newTaskDueDate) return;
		appStore.addAdminTask({
			title: newTaskTitle.trim(),
			priority: newTaskPriority,
			status: 'pending',
			assignee: user?.name || 'Unassigned',
			dueDate: newTaskDueDate
		});
		newTaskTitle = '';
		newTaskPriority = 'medium';
		newTaskDueDate = '';
	}

	function toggleStatus(task) {
		appStore.updateAdminTask(task.id, { status: task.status === 'completed' ? 'pending' : 'completed' });
	}

	function removeTask(id) {
		appStore.removeAdminTask(id);
	}

	function getPriorityClass(priority) {
		if (priority === 'high') return 'danger';
		if (priority === 'medium') return 'warning';
		return 'success';
	}
</script>

<svelte:head>
	<title>{t.adminTasks} | {t.appName}</title>
</svelte:head>

<h1>{t.adminTasks}</h1>

{#if user?.role === 'admin'}
	<div class="card" style="margin-bottom: 1.5rem;">
		<h2>Create New Task</h2>
		<div class="form-row">
			<label for="taskTitle">Task</label>
			<input id="taskTitle" bind:value={newTaskTitle} placeholder="Enter task description" />
		</div>
		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
			<div class="form-row">
				<label for="taskPriority">Priority</label>
				<select id="taskPriority" bind:value={newTaskPriority}>
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
			</div>
			<div class="form-row">
				<label for="taskDueDate">Due Date</label>
				<input id="taskDueDate" type="date" bind:value={newTaskDueDate} />
			</div>
		</div>
		<button on:click={addTask} style="margin-top: 1rem;">Add Task</button>
	</div>
{/if}

<div class="card">
	<h2>Task List</h2>
	<table style="margin-top: 1rem;">
		<thead>
			<tr>
				<th>Status</th>
				<th>Task</th>
				<th>Priority</th>
				<th>Assignee</th>
				<th>Due Date</th>
				{#if user?.role === 'admin'}
					<th>{t.actions}</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each $appStore.adminTasks as task}
				<tr>
					<td>
						<input type="checkbox" checked={task.status === 'completed'} on:change={() => toggleStatus(task)} />
					</td>
					<td style={task.status === 'completed' ? 'text-decoration: line-through; opacity: 0.7;' : ''}>{task.title}</td>
					<td>
						<span class="badge {getPriorityClass(task.priority)}">{task.priority}</span>
					</td>
					<td>{task.assignee}</td>
					<td>{task.dueDate}</td>
					{#if user?.role === 'admin'}
						<td>
							<button class="danger" style="padding: 0.35rem 0.6rem; font-size: 0.8rem;" on:click={() => removeTask(task.id)}>{t.delete}</button>
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
	{#if $appStore.adminTasks.length === 0}
		<p style="text-align: center; color: var(--muted); padding: 2rem;">No admin tasks yet.</p>
	{/if}
</div>
