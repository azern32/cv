<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link href="/css2.css" rel="stylesheet" />
	<!-- <link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
	/> -->
</svelte:head>

<div class="dark">
	<button
		data-drawer-target="default-sidebar"
		data-drawer-toggle="default-sidebar"
		aria-controls="default-sidebar"
		type="button"
		class="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
	>
		<span class="sr-only">Open sidebar</span>
		<svg
			class="h-6 w-6"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				clip-rule="evenodd"
				fill-rule="evenodd"
				d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
			></path>
		</svg>
	</button>

	<aside
		id="default-sidebar"
		class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
		aria-label="Sidebar"
	>
		<div class="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
			<ul class="space-y-2 font-medium">
				<li>
					<a
						href="/"
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<span class="material-symbols-outlined text-gray-400"> chair </span>

						<span class="ms-3">Welcome</span>
					</a>
				</li>

				<li>
					<a
						href="generic"
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<span class="material-symbols-outlined text-gray-400"> contact_page </span>

						<span class="ms-3">General</span>
					</a>
				</li>

				<li>
					<a
						href="ats"
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<span class="material-symbols-outlined text-gray-400"> checklist </span>

						<span class="ms-3">ATS</span>
					</a>
				</li>
			</ul>
		</div>
	</aside>

	<div class="p-4 sm:ml-64">
		{@render children()}
	</div>
</div>
