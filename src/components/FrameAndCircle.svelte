<script>
	import Circle from '../components/Circle.svelte'
	import Frame from '../components/Frame.svelte'
	import { onMount } from 'svelte'
	//	import Frame from './Frame.svelte'
	let frameLoad = false
	$: frameLoad && startsCircles()
	let CircleLenght
	let startsCircle
	const arrStartsCircle = [false, false, false, false]
	onMount(() => {})
	function startsCircles() {
		for (let i = 0; i < arrStartsCircle.length; i++) {
			setTimeout(function () {
				arrStartsCircle[i] = true
			}, i * 600)
		}
	}
</script>

<div class="w-full">
	<Frame bind:frameLoad />
	<div id="grid-circle" class="w-full grid grid-cols-2 gap-2 pt-3 ">
		<div>
			<Circle startsCircle={arrStartsCircle[0]} />
			<div class="wrapper">
				<div class="icon blue">
					<span class="tooltip">
						Быстрые сайты любят пользователи и поисковики. Анализирует скорость
						отклика сервера, отрисовка стилей, загрузки шрифтов и контента.</span>
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
						веб-разработки.</span>
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
						управлять интерфейсом.</span>
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
					</span>
					<div class="header text-center text-base text-white">SEO</div>
				</div>
			</div>
		</div>
		<div>
			<div
				class="w-[70px] h-[70px] rounded-full bg-slate-700/[0.2]  mx-auto flex justify-center items-center">
				<div
					class=" circle_center rounded-full bg-white flex justify-center items-center">
					<img src="/pwa.svg" />
				</div>
			</div>

			<div class="wrapper">
				<div class="icon blue">
					<span class="tooltip">
						Трансформирует сайт в приложение. При этом полностью сохраняется
						функциональность нативного приложения.
					</span>
					<div class="header text-center text-base text-white">PWA</div>
				</div>
			</div>
		</div>
		<div>
			<div
				class="w-[70px] h-[70px] rounded-full bg-slate-700/[0.2] mx-auto flex justify-center items-center">
				<div
					class="circle_center rounded-full bg-white flex justify-center items-center">
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
					<div class="header text-center text-base text-white">WebDev</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#grid-circle {
		// grid-template-rows: 120px auto;

		.circle_center {
			width: 50px;
			height: 50px;
			border: 5px solid #93c5fd;
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

	.wrapper .tooltip::before {
		position: absolute;
		content: '';
		height: 8px;
		width: 8px;
		background: #ffffff;
		bottom: -3px;
		left: 50%;
		transform: translate(-50%) rotate(45deg);
		transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	.wrapper .icon:hover .tooltip {
		top: -118px;
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
