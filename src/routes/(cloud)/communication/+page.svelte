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

	let selectedContactId = null;
	let newMessage = '';

	$: contacts = $appStore.users.filter((u) => u.id !== user?.id);

	$: selectedContact = $appStore.users.find((u) => u.id === selectedContactId);

	$: messages = $appStore.messages.filter(
		(m) =>
			(m.senderId === user?.id && m.recipientId === selectedContactId) ||
			(m.senderId === selectedContactId && m.recipientId === user?.id)
	);

	function selectContact(contactId) {
		selectedContactId = contactId;
		$appStore.messages
			.filter((m) => m.senderId === contactId && m.recipientId === user?.id && !m.read)
			.forEach((m) => appStore.markMessageRead(m.id));
	}

	function sendMessage() {
		if (!selectedContactId || !newMessage.trim()) return;
		appStore.sendMessage({
			senderId: user.id,
			senderName: user.name,
			recipientId: selectedContactId,
			content: newMessage.trim(),
			read: false
		});
		newMessage = '';
	}

	function getUnreadCount(contactId) {
		return $appStore.messages.filter((m) => m.senderId === contactId && m.recipientId === user?.id && !m.read).length;
	}
</script>

<svelte:head>
	<title>{t.communication} | {t.appName}</title>
</svelte:head>

<h1>{t.communication}</h1>

<div class="card" style="display: grid; grid-template-columns: 280px 1fr; min-height: 500px; padding: 0; overflow: hidden;">
	<!-- Sidebar: Contacts -->
	<div style="border-right: 1px solid var(--border); background: var(--surface); display: flex; flex-direction: column;">
		<div style="padding: 1rem; border-bottom: 1px solid var(--border);">
			<h2 style="font-size: 1rem; margin: 0;">Contacts</h2>
		</div>
		<div style="overflow-y: auto;">
			{#each contacts as contact}
				<button
					class="contact-item"
					class:active={selectedContactId === contact.id}
					on:click={() => selectContact(contact.id)}
					style="width: 100%; text-align: left; padding: 0.75rem 1rem; border: none; background: transparent; border-bottom: 1px solid var(--border); cursor: pointer; display: flex; justify-content: space-between; align-items: center;"
				>
					<span>{contact.name} <small style="color: var(--muted);">({contact.role})</small></span>
					{#if getUnreadCount(contact.id) > 0}
						<span class="badge danger" style="min-width: 1.5rem; text-align: center;">{getUnreadCount(contact.id)}</span>
					{/if}
				</button>
			{/each}
		</div>
	</div>

	<!-- Chat Area -->
	<div style="display: flex; flex-direction: column; height: 500px;">
		{#if selectedContact}
			<div style="padding: 1rem; border-bottom: 1px solid var(--border); background: var(--surface);">
				<h2 style="font-size: 1rem; margin: 0;">{selectedContact.name}</h2>
				<small style="color: var(--muted);">{selectedContact.email}</small>
			</div>

			<div style="flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
				{#each messages as message}
					<div style="align-self: {message.senderId === user?.id ? 'flex-end' : 'flex-start'}; max-width: 70%; background: {message.senderId === user?.id ? 'var(--primary)' : 'var(--surface)'}; color: {message.senderId === user?.id ? 'white' : 'var(--text)'}; padding: 0.75rem 1rem; border-radius: 1rem; border-bottom-right-radius: {message.senderId === user?.id ? '0.25rem' : '1rem'}; border-bottom-left-radius: {message.senderId === user?.id ? '1rem' : '0.25rem'};">
						<p style="margin: 0;">{message.content}</p>
						<small style="opacity: 0.8; font-size: 0.7rem;">{new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
					</div>
				{/each}
				{#if messages.length === 0}
					<p style="text-align: center; color: var(--muted); margin: auto;">Start a conversation with {selectedContact.name}.</p>
				{/if}
			</div>

			<div style="padding: 1rem; border-top: 1px solid var(--border); display: flex; gap: 0.5rem;">
				<input
					bind:value={newMessage}
					placeholder="Type a message..."
					style="flex: 1;"
					on:keydown={(e) => e.key === 'Enter' && sendMessage()}
				/>
				<button on:click={sendMessage}>Send</button>
			</div>
		{:else}
			<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--muted);">
				<p>Select a contact to start chatting.</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.contact-item:hover,
	.contact-item.active {
		background: var(--border) !important;
	}
</style>
