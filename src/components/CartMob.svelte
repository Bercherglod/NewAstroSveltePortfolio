<script>
	//import Tractorcat from './Tractorcat.svelte';

	import { onMount } from 'svelte'
	import TractorcatMob from '../components/TractorcatMobil.svelte'
	import IntersectionObserver from 'svelte-intersection-observer'
	import { blur } from 'svelte/transition'
	import { cubicIn } from 'svelte/easing'

	let node, node2
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

<div class="w-[100vw] flex justify-evenly items-center">
	<IntersectionObserver
		element={node}
		let:intersecting
		on:observe={(e) => {
			node2 = e.detail.isIntersecting // true | false
		}}>
		<div class=" h-[300px] my-auto" bind:this={node}>
			{#if intersecting}
				<ul
					class="ltext h-[300px] relative top-0 text-right my_font_fam text-4xl p-4 font-bold text-white">
					<li
						class="h-[100px] block"
						transition:blur={{ duration: 400, delay: 0, easing: cubicIn }}>
						АДАПТИВНЫЙ
					</li>
					<li
						class="h-[100px]  block"
						transition:blur={{ duration: 400, delay: 400, easing: cubicIn }}>
						UX/UI ДИЗАЙН
					</li>
					<li
						class="h-[100px]  block"
						transition:blur={{ duration: 400, delay: 800, easing: cubicIn }}>
						КАЧЕСТВЕННОЕ SEO
					</li>
				</ul>
			{/if}
		</div>
	</IntersectionObserver>
	<div
		bind:this={mouseMove}
		id="floating"
		class="rounded-lg grid content-center mouse_move transform-gpu">
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
	</div>

	<div class=" h-[300px] my-auto">
		{#if node2}
			<ul
				class="ltext h-[300px] my_font_fam text-4xl  p-4 font-bold text-white from-purple-200 via-pink-300 to-blue-300 bg-gradient-to-l bg-clip-text  flex flex-col justify-evenly items-right">
				<li
					class="h-[100px]"
					transition:blur={{ duration: 400, delay: 1200, easing: cubicIn }}>
					CND - РАЗМЕЩЕНИЕ
				</li>
				<li
					class="h-[100px]"
					transition:blur={{ duration: 400, delay: 1600, easing: cubicIn }}>
					SSG - ПОДХОД
				</li>
				<li
					class="h-[100px]"
					transition:blur={{ duration: 400, delay: 2000, easing: cubicIn }}>
					ПРОДАЮЩИЙ
				</li>
			</ul>
		{/if}
	</div>
</div>

<style>
	.floating {
		font-family: Inconsolata;
		box-shadow: -20px 14px 54px rgba(1, 1, 48, 0.25);
		font-size: 18px;
		border-radius: 8px;
		transform-style: preserve-3d;
		transform-origin: 50% 50%;
		background: linear-gradient(145deg, #4684c1, #343174);
		transform: rotateX(-10deg) rotateY(-10deg);
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
