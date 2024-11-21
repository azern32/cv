<script>
	let { children, title = '' } = $props();
</script>

<div class="flex w-full flex-col">
	<div class="dui-divider" class:dui-divider-start={title.length}>
		{#if title}
			<h3 class="text-xl text-gray-600">{title}</h3>
		{/if}
	</div>
	<div class="text-gray-600">
		{@render children()}
	</div>
</div>
