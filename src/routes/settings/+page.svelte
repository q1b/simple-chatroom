<script lang="ts">
	import { getContext, onMount } from 'svelte';

	let supported = false;
	let subscribed = false;

	const VAPID_PUBLIC_KEY = 'BBlgPtH8NJcE3IKfVhGot9-RtYtjkl2pZQ9dvv9f2eolKXKUq86aDekggcQ7q-4l4MKIeK_rVCCf_qZJZRafJRc';

	async function subscribe() {
		console.log('Subscribing')
		try {
			const registration = await navigator.serviceWorker.ready;
			console.log("Registration Ready")
			const subscription = await registration.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey: VAPID_PUBLIC_KEY
			});

			console.log(subscription)

			await fetch('/api/push/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(subscription)
			});

			subscribed = true;
		} catch (err) {
			console.error('Failed to subscribe to push notifications:', err);
		}
	}

	onMount(async () => {
		supported = 'serviceWorker' in navigator && 'PushManager' in window;

		if (supported) {
			const registration = await navigator.serviceWorker.ready;
			const subscription = await registration.pushManager.getSubscription();
			subscribed = !!subscription;
		}
	});
	const user = getContext('user');
</script>

<div
	class="col-start-3 row-start-1 w-full min-w-0 flex flex-col bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300"
>
	<nav class="flex">
		<a
			href="/"
			aria-label="goto homepage"
			class="border-r border-b border-r-(--pattern-fg) border-b-(--pattern-fg) flex items-center justify-center p-2.5 hover:dark:bg-white/7 dark:bg-white/5 focus:outline-none"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="size-4"
			>
				<path
					fill-rule="evenodd"
					d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
		<h2
			class="bg-zinc-50 pl-2 border-b border-b-(--pattern-fg) flex items-center w-full dark:bg-white/5"
		>
			Settings
		</h2>
	</nav>
	<div class="flex flex-col">
		<div class="flex flex-col border-b border-b-zinc-400 p-2">
			<span>User ID</span>
			<span>{user().id}</span>
		</div>

		<div class="flex flex-col border-b border-b-zinc-400 p-2">
			<span>Name</span>
			<span>{user().name}</span>
		</div>
		<!-- <form class="flex flex-col border-b border-b-zinc-400">
			<label for="name">Name</label>
			<input id="name" name="name" value={user().name} />
		</form> -->
		{#if supported}
			<button
				onclick={subscribe}
				disabled={subscribed}
				class="px-4 py-2 mt-4 cursor-pointer bg-blue-600 text-white disabled:text-zinc-400 disabled:bg-zinc-400/20"
			>
				{subscribed ? 'Notifications Enabled' : 'Enable Notifications'}
			</button>
		{/if}
		<div class="mt-4">
		</div>
		<form method="post" action="?/logout">
			<button class="px-4 cursor-pointer py-2 bg-rose-600 text-white shadow inset-shadow-rose-500">Sign Out</button>
		</form>
	</div>
</div>
