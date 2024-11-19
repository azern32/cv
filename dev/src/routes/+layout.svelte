<script>
	import '../app.css';
	let { children } = $props();
</script>

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
						href="#"
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<svg
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 21"
						>
							<path
								d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
							/>
							<path
								d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
							/>
						</svg>
						<span class="ms-3">Dashboard</span>
					</a>
				</li>
			</ul>
		</div>
	</aside>

	<div class="p-4 sm:ml-64">
		{@render children()}
	</div>
</div>
