<script>
	//import Tractorcat from './Tractorcat.svelte';

	import { onMount } from 'svelte'
	import TractorcatMob from '../components/TractorcatMobil.svelte'
	let card_x, card_y, shadow_x, shadow_y, text_shadow_x, text_shadow_y
	let mouseMove
	let innerWidth
	let perspective
	onMount(() => {
		innerWidth = window.innerWidth
		mouseMove.addEventListener('mousemove', function (evt) {
			card_x = getTransformValue(evt.clientX, innerWidth, 56)
			card_y = getTransformValue(evt.clientY, innerHeight, 56)
			shadow_x = getTransformValue(evt.clientX, innerWidth, 20)
			shadow_y = getTransformValue(evt.clientY, innerHeight, 20)
			text_shadow_x = getTransformValue(evt.clientX, innerWidth, 28)
			text_shadow_y = getTransformValue(evt.clientY, innerHeight, 28)
		})
		function getTransformValue(v1, v2, value) {
			return ((v1 / v2) * value - value / 2).toFixed()
		}
	})
</script>

<svelte:window bind:innerWidth />

<div
	bind:this={mouseMove}
	id="floating"
	class="rounded-lg grid content-center mouse_move h-[800px] transform-gpu">
	{#if innerWidth > 480}
		<div
			class="floating  w-[360px] h-[600px]  m-auto"
			style="
transform: perspective(3000px) rotateX({card_y / 1}deg) rotateY({card_x}deg);
box-shadow: {-card_x}px {card_y / 1}px 55px rgba(0, 0, 0, .55);
drop-shadow:{-shadow_x}px {shadow_y / 1}px 4px rgba(0, 0, 0, .6);
text-shadow: {-text_shadow_x}px {text_shadow_y / 1}px 6px rgba(0, 0, 0, .8)">
			<div class="thickness" />
			<div class="thickness" />
			<div class="thickness" />
			<div class="w-full h-full rounded-lg  overflow-hidden">
				<div class="w-[360px] h-[600px] rounded-lg bg-orange-600 overflow-hidden">
					<TractorcatMob />
				</div>
			</div>
		</div>
	{:else}
		<div class="w-100 h-[400px] bg-slate-400" />
	{/if}
</div>

<style>
	.floating {
		font-family: Inconsolata;
		box-shadow: -20px 14px 54px rgba(0, 0, 0, 0.55);
		font-size: 18px;
		border-radius: 8px;
		transform-style: preserve-3d;
		transform-origin: 50% 50%;
		background: linear-gradient(145deg, #4684c1, #343174);
		transform: rotateX(0deg) rotateY(0deg);
		transition: all 0.5s ease-out;
	}

	.thickness {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		position: absolute;
		background: linear-gradient(145deg, #4684c1, #343174);
		transform: translateZ(-4px);
	}
	.thickness:nth-child(2) {
		transform: translateZ(-8px);
	}
	.thickness:nth-child(3) {
		transform: translateZ(-11px);
	}
</style>
