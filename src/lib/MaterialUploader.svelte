<script>
	import { appStore } from '../store.js';
	export let t = {};

	let title = '';
	let subject = '';
	let fileName = '';
	let selectedType = 'pdf';
	let simulatedContent = '';

	function simulateUpload(e) {
		const file = e.target.files[0];
		if (!file) return;
		title = file.name.replace(/\.[^/.]+$/, '');
		fileName = file.name;
		// Simulate base64 content locally
		const reader = new FileReader();
		reader.onload = () => {
			simulatedContent = reader.result;
		};
		reader.readAsDataURL(file);
	}

	function addMaterial() {
		if (!title.trim() || !fileName.trim()) return;
		appStore.addMaterial({
			title: title.trim(),
			subject: subject.trim() || 'Cloud Computing',
			fileName: fileName.trim(),
			size: '1.0 MB',
			url: simulatedContent || 'data:text/plain;base64,Mock+PDF+Content',
			type: selectedType
		});
		title = '';
		subject = '';
		fileName = '';
		simulatedContent = '';
	}
</script>

<div class="form-row">
	<label for="matTitle">{t.subject}</label>
	<input id="matTitle" bind:value={subject} placeholder="e.g. Cloud Security" />
</div>
<div class="form-row">
	<label for="matFile">{t.fileName}</label>
	<input id="matFile" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" on:change={simulateUpload} />
</div>
<div class="form-row">
	<label for="matType">Type</label>
	<select id="matType" bind:value={selectedType}>
		<option value="pdf">PDF</option>
		<option value="doc">Document</option>
		<option value="ppt">Presentation</option>
	</select>
</div>
<button on:click={addMaterial}>{t.addMaterial}</button>

<table style="margin-top: 1.5rem;">
	<thead>
		<tr>
			<th>{t.title}</th>
			<th>{t.subject}</th>
			<th>{t.fileName}</th>
			<th>{t.actions}</th>
		</tr>
	</thead>
	<tbody>
		{#each $appStore.materials as mat}
			<tr>
				<td>{mat.title}</td>
				<td>{mat.subject}</td>
				<td><span class="badge">{mat.fileName}</span></td>
				<td><a href={mat.url} download={mat.fileName} class="btn" style="padding: 0.35rem 0.6rem; font-size: 0.8rem;">{t.download}</a></td>
			</tr>
		{/each}
	</tbody>
</table>
