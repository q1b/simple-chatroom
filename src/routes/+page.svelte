<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from "./$types"

	let { data }: PageProps = $props();

</script>
<div
	class="relative col-start-3 row-start-1 pt-12 flex flex-col overflow-auto max-h-[calc(100vh-48px)] gap-y-2 min-w-0 sm:w-lg bg-zinc-100 p-2 dark:bg-white/8 text-zinc-700 dark:text-zinc-300"
>
	<div class="absolute top-0 left-0">
		<h2
			aria-label="settings"
			class="border-r border-b border-r-(--pattern-fg) border-b-(--pattern-fg) flex items-center justify-center p-2 text-sm hover:dark:bg-white/7 dark:bg-white/5 focus:outline-none"
		>
			Simple Chat Room
		</h2>
	</div>
	<div class="absolute top-0 right-0 flex">
		<a
			href="/settings"
			aria-label="settings"
			class="border-l border-b border-l-(--pattern-fg) border-b-(--pattern-fg) flex items-center justify-center p-2.5 hover:dark:bg-white/7 dark:bg-white/5 focus:outline-none"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="size-4"
			>
				<path
					d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z"
				/>
			</svg>
		</a>
		<a
			href="/notifications"
			aria-label="notifications"
			class="border-l border-b border-l-(--pattern-fg) border-b-(--pattern-fg) flex items-center justify-center p-2.5 hover:dark:bg-white/7 dark:bg-white/5 focus:outline-none"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="size-4"
			>
				<path
					fill-rule="evenodd"
					d="M12 5a4 4 0 0 0-8 0v2.379a1.5 1.5 0 0 1-.44 1.06L2.294 9.707a1 1 0 0 0-.293.707V11a1 1 0 0 0 1 1h2a3 3 0 1 0 6 0h2a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707L12.44 8.44A1.5 1.5 0 0 1 12 7.38V5Zm-5.5 7a1.5 1.5 0 0 0 3 0h-3Z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
	{#each data.messages as message}
		{#if message.user.id === data.user.id}
			<div class="flex flex-col items-end">
				<span class="">{message.content}</span>
				<span class="text-xs -mt-1">{message.user.name}:{message.createdAt.toLocaleTimeString()}</span>
			</div>
		{:else}
		<div class="flex flex-col">
			<span class="">{message.content}</span>
			<span class="text-xs -mt-1">{message.user.name}:{message.createdAt.toLocaleTimeString()}</span>
		</div>
		{/if}
	{/each}
</div>

<div
	class="col-start-3 row-start-3 bg-zinc-100 p-2 dark:bg-white/10 text-zinc-700 dark:text-zinc-300"
>
	<form method="POST" class="flex" use:enhance>
		<input placeholder="type something ..." name="message" for="message"  class="rounded-l-xl w-full py-0.5 pl-2 focus:outline-none" />
		<button aria-label="send message" class="flex items-center justify-center p-2 focus:outline-none cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
				<path
					d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z"
				/>
			</svg>
		</button>
	</form>
</div>
