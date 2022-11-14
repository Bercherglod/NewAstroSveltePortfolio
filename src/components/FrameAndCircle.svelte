<script>
	import IntersectionObserver from 'svelte-intersection-observer'
	import Circle from '../components/Circle.svelte'
	import Frame from '../components/Frame.svelte'
	import '../styles/global.scss'
	import { onMount } from 'svelte'
	import { query_selector_all } from 'svelte/internal'
	//	import Frame from './Frame.svelte'
	let frameLoad = false
	let element
	let intersecting
	let tooltip, timeoutRePos, tooltipLeft
	let contWidth
	let rect
	let tooltipLeftNum
	$: contWidth && repositionTooltipLeft()

	$: intersecting && startsCircles()
	let CircleLenght
	let startsCircle
	const arrStartsCircle = [false, false, false, false]
	onMount(() => {
		tooltip = document.querySelectorAll('.tooltip')
	})
	function startsCircles() {
		for (let i = 0; i < arrStartsCircle.length; i++) {
			setTimeout(function () {
				arrStartsCircle[i] = true
			}, i * 600)
		}
	}
	function repositionTooltipLeft() {
		console.log('repositionTooltipLeft')
		if (timeoutRePos) clearTimeout(timeoutRePos)
		var windowPositionRight =
			window.pageXOffset + document.documentElement.clientWidth
		timeoutRePos = setTimeout(() => {
			tooltip.forEach((el) => {
				let rect = el.getBoundingClientRect()
				el.style.left = 'auto'
				el.style.right = 'auto'
				if (el.getBoundingClientRect().left < 0) el.style.left = '0'
				if (
					window.pageXOffset + el.getBoundingClientRect().right >
					windowPositionRight
				)
					el.style.right = '0'
			})
		}, 1000)
	}
</script>

<div class="w-full h-[100vh]  flex flex-col justify-evenly">
	<div class="h-[60vh]">
		<Frame bind:frameLoad />
	</div>
	<IntersectionObserver {element} bind:intersecting threshold={1}>
		<h1
			bind:this={element}
			bind:clientWidth={contWidth}
			class="w-full text-3xl xm:text-4xl sm:text-4xl text-center font-bold from-purple-200 via-pink-300 to-blue-300 bg-gradient-to-r bg-clip-text text-transparent">
			Создаю сайты на максималках!
		</h1>
	</IntersectionObserver>
	<div
		id="grid-circle"
		class="w-full grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-6 gap-2 xm:gap-4 pt-3 ">
		<div>
			<Circle startsCircle={arrStartsCircle[0]} />
			<div class="wrapper">
				<div class="icon blue">
					<span bind:this={tooltipLeft} class="tooltip">
						Быстрые сайты любят пользователи и поисковики. Анализирует скорость
						отклика сервера, отрисовка стилей, загрузки шрифтов и контента.</span
					><span class="before" />
					<div class="header text-center text-base text-white">Performance</div>
				</div>
			</div>
		</div>
		<div>
			<Circle startsCircle={arrStartsCircle[1]} />
			<div class="wrapper">
				<div class="icon blue">
					<span class="tooltip">
						Проверяет безопасность сайта и использование современных стандартов
						веб-разработки.</span
					><span class="before" />
					<div class="header text-center text-base text-white">Best Practices</div>
				</div>
			</div>
		</div>
		<div>
			<Circle startsCircle={arrStartsCircle[2]} />
			<div class="wrapper">
				<div class="icon blue">
					<span class="tooltip">
						Оценка зависит от понятности и воспринимаемости контента, возможности
						управлять интерфейсом.</span
					><span class="before" />
					<div class="header text-center text-base text-white">Accessibility</div>
				</div>
			</div>
		</div>
		<div>
			<Circle startsCircle={arrStartsCircle[3]} />
			<div class="wrapper">
				<div class="icon blue">
					<span class="tooltip">
						Оценивает соответствие страницы поисковой оптимизации, адаптацию для
						мобильных устройств.
					</span><span class="before" />
					<div class="header text-center text-base text-white">SEO</div>
				</div>
			</div>
		</div>
		<div class="hidden xm:block">
			<div
				class="circle_center rounded-full bg-slate-700/[0.2]  mx-auto flex justify-center items-center">
				<div class=" rounded-full bg-white flex justify-center items-center">
					<img src="/pwa.svg" />
				</div>
			</div>

			<div class="wrapper">
				<div class="icon blue">
					<span class="tooltip">
						Трансформирует сайт в приложение. При этом полностью сохраняется
						функциональность нативного приложения.
					</span><span class="before" />
					<div class="header text-center text-base text-white">PWA</div>
				</div>
			</div>
		</div>
		<div class="hidden xm:block">
			<div
				class="circle_center  rounded-full bg-slate-700/[0.2] mx-auto flex justify-center items-center">
				<div class="rounded-full bg-white flex justify-center items-center">
					<img src="/webdev.svg" width="35" />
				</div>
			</div>
			<div class="wrapper">
				<div class="icon blue">
					<div class="tooltip">
						Протестируйте этот сайт в лабораторной среде с помощью <a
							href="https://web.dev/measure/?url=https%3A%2F%2Ftractorcat.ru"
							class="contents text-blue-300">PageSpeed ​Insights</a
						>.
					</div>
					<span class="before" />
					<div class="header text-center text-base text-white">WebDev</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../styles/global.scss';
	$base-width: 100px;
	$top-width: 76px;
	#grid-circle {
		// grid-template-rows: 120px auto;

		.circle_center {
			width: $base-width;
			height: $base-width;
			@include media('max', 'xm') {
				width: calc($base-width/1.5);
				height: calc($base-width/1.5);
			}
			div {
				border: 5px solid #93c5fd;
				width: $top-width;
				height: $top-width;
				@include media('max', 'xm') {
					width: calc($top-width/1.5);
					height: calc($top-width/1.5);
				}
			}
		}
	}

	.wrapper .icon {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		cursor: pointer;
	}
	.wrapper .header {
		margin-left: 10px;
	}
	.wrapper .header:after {
		content: '';
		background-image: url('/expand_more.svg');
		background-size: cover;
		display: inline-block;
		font-family: 'Font Awesome 5 free';
		margin-left: 5px;
		width: 13px;
		height: 13px;
	}

	.wrapper .tooltip {
		position: absolute;
		top: 0;
		font-size: 14px;
		background: #ffffff;
		color: #ffffff;
		width: 220px;
		z-index: 100;
		padding: 5px 8px;
		margin-left: 5px;
		margin-right: 5px;
		height: 120px;
		border-radius: 5px;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
		opacity: 0;
		pointer-events: none;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	.wrapper .before {
		position: absolute;
		content: '';
		height: 8px;
		width: 8px;
		background: #42425a;
		bottom: 24px;
		left: 50%;
		visibility: hidden;
		transform: translate(-50%) rotate(45deg);
		transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		@include media('max', 'xm') {
			bottom: 20px;
		}
	}
	.wrapper .icon:hover .before {
		display: block;
		visibility: visible;
	}

	.wrapper .icon:hover .tooltip {
		top: -132px;
		@include media('max', 'xm') {
			top: -130px;
		}
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
	}

	.wrapper .icon:hover span,
	.wrapper .icon:hover .tooltip {
		text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
	}

	.wrapper .blue:hover .tooltip,
	.wrapper .blue:hover .tooltip::before {
		background: rgb(51 65 85 / 0.9);
		color: #ffffff;
	}
</style>
