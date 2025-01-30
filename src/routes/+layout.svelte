<script lang="ts">
	import '../app.css'

	import { setContext } from 'svelte';
	import type { LayoutProps } from './$types';

	import { pwaInfo } from 'virtual:pwa-info';
	import { pwaAssetsHead } from 'virtual:pwa-assets/head';

	let webManifest = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');

	let { children, data }: LayoutProps = $props();

	let loggedIn = $state(data.user !== null);

	setContext('user', () => data.user);
</script>


<svelte:head>
	<title>Simple Chat Room</title>
	<meta name="description" content="Simple Chat Room, learning about Web Push Notifications" />
	{#if pwaAssetsHead.themeColor}
		<meta name="theme-color" content={pwaAssetsHead.themeColor.content} />
	{/if}
	{#each pwaAssetsHead.links as link}
		<link {...link} />
	{/each}
	<!-- eslint-disable-next-line -->
	{@html webManifest}
</svelte:head>

<!-- grid-rows-[1fr_1px_auto_1px_0px] - chatbox -->
<!-- grid-rows-[1fr_1px_auto_1px_1fr] - auth -->
<div
	class="relative grid min-h-screen {!loggedIn
		? 'grid-rows-[1fr_1px_auto_1px_1fr]'
		: 'grid-rows-[1fr_1px_auto_1px_0px]'} grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_0px] [--pattern-fg:var(--color-zinc-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"
>
	{#if loggedIn}
		{@render children?.()}
	{:else}
		<div
			class="col-start-3 row-start-3 flex max-w-lg w-full flex-col bg-zinc-100 p-2 dark:bg-white/10"
		>
			<a
				href="/login/google"
				class="inline-flex items-center gap-x-2 rounded-xl bg-white text-gray-700 dark:bg-gray-950 dark:text-gray-300 px-2 text-sm/7"
			>
				<span class="">Continue With Google</span>
				<svg
					height="16"
					stroke-linejoin="round"
					viewBox="0 0 16 16"
					width="16"
					style="color: currentcolor;"
				>
					<path
						d="M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z"
						fill="#4285F4"
					></path>
					<path
						d="M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z"
						fill="#34A853"
					></path>
					<path
						d="M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z"
						fill="#FBBC05"
					></path>
					<path
						d="M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z"
						fill="#EA4335"
					></path>
				</svg>
			</a>
		</div>
	{/if}
	{#await import('$lib/PWABadge.svelte') then { default: PWABadge }}
			<PWABadge />
	{/await}
	<div
		class="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"
	></div>
	<div
		class="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"
	></div>
	<div
		class="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"
	></div>
	<div class="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
</div>
