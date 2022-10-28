<script>
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage'
</script>

<svelte:head>
	<title>Svelte-fullpage</title>
</svelte:head>

<Fullpage>
	<FullpageSection title="Svelte Fullpage">
		<div class="container text-center">
			<div class="row">
				<div class="col">
					<h1>Svelte Fullpage</h1>
					<p>
						This page is made using svelte-fullpage component, try to scroll, drag
						with mouse or swipe vertical with finger or use arrows to scroll.
					</p>
				</div>
			</div>
		</div>
	</FullpageSection>
	<FullpageSection title="Features" class="bg-info" />

	<FullpageSection title="Future" class="bg-warning">
		<div class="container text-center">
			<div class="row">
				<div class="col">
					<h1>Future of this component</h1>
					<p>
						This component is in development and is far from being ideal, as you
						noticed (maybe), there is problem with slide animation. Currently I'm the
						only contributor of this project, feel free to fork it and make pull
						request.
					</p>
				</div>
			</div>
		</div>
	</FullpageSection>
</Fullpage>

<style>
	:global(body) {
		height: 100vh;
	}
</style>
