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
		console.log('startsCircles')
		for (let i = 0; i < arrStartsCircle.length; i++) {
			setTimeout(function () {
				arrStartsCircle[i] = true
			}, i * 600)
		}
	}
</script>

<Frame bind:frameLoad />
<div id="grid-circle" class="grid overflow-hidden grid-cols-4 grid-rows-2">
	<Circle startsCircle={arrStartsCircle[0]} />
	<Circle startsCircle={arrStartsCircle[1]} />
	<Circle startsCircle={arrStartsCircle[2]} />
	<Circle startsCircle={arrStartsCircle[3]} />

	<details class="box relative">
		<summary class="text-center text-2xl text-white">Performance</summary>
		Быстрые сайты любят и пользователи, и поисковики. Анализирует скорость загрузки
		сайта. На эту оценку влияет время блокировки, отрисовки стилей, загрузки интерактивных
		элементов, шрифтов и контента.
	</details>
	<details class="box">
		<summary class="text-center text-2xl text-white">Best Practices</summary>
		Проверяет безопасность сайта и использование современных стандартов веб-разработки.
	</details>
	<details class="box">
		<summary class="text-center text-2xl text-white">Accessibility</summary>
		Оценка зависит от понятности и воспринимаемости контента, возможности управлять
		интерфейсом.
	</details>
	<details class="box">
		<summary class="text-center text-2xl text-white">SEO</summary>
		Оценивает соответствие страницы поисковой оптимизации, адаптированность к мобильным
		устройствам. Проверяется использование метатегов, доступ к индексации, наличие
		атрибутов у изображений, и другие характеристики.
	</details>
</div>

<style lang="scss">
	#grid-circle {
		grid-template-rows: 120px auto;

		.box {
			padding-left: 20px;
			padding-right: 20px;
			font-size: medium;
			text-align: justify;
		}
		summary {
			cursor: pointer;
			margin-right: 20px;
		}
		/* Убираем стандартный маркер Chrome */
		details summary::-webkit-details-marker {
			display: none;
		}
		/* Убираем стандартный маркер Firefox */
		details > summary {
			list-style: none;
		}

		details summary:before {
			content: url('/expand_more.svg');
			font-family: 'Font Awesome 5 free';
			margin-right: 5px;
			width: 10px;
			height: 10px;
		}
	}
</style>
