<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div
	class="col-start-3 row-start-1 w-full min-w-0 flex flex-col bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300"
>
	<nav class="flex">
		<a
			href="/notify"
			aria-label="goto /notify"
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
			Notify User
		</h2>
	</nav>
	<div class="flex flex-col">
		<form method="post" use:enhance class="flex p-2 flex-col gap-y-4">
			<div class="flex flex-col">
				<label class="" for="title">Title</label>
				<input id="title" name="title" class="p-2 focus:outline-none bg-white/10" placeholder="Enter Title" />
			</div>
			<div class="flex flex-col">
				<label class="" for="body">Body</label>
				<textarea id="body" name="body" class="p-2 focus:outline-none bg-white/10" placeholder="Enter Body"></textarea>
			</div>
			<div>
				<button class="px-2 py-1 bg-blue-600 cursor-pointer" type="submit">Send</button>
			</div>
		</form>
	</div>
</div>
