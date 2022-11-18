<script>
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { quartInOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'
	import '../styles/global.scss'

	let cx = 0,
		cy = 0,
		cdel = 100,
		cdura = 500,
		cimg = '1',
		sumTime = 1000

	let arrAnimPos = [
		[200, 200, 0, 300, '2'],
		[300, 300, 300, 300, '1'],
		[100, 100, 400, 300, '1'],
		[400, 200, 0, 300, '2']
	]

	function cursorPosition() {
		arrAnimPos.forEach((el) => {
			setTimeout(() => {
				cx = el[0]
				cy = el[1]
				cdel = el[2]
				cdura = el[3]
				cimg = el[4]
			}, (sumTime += cdura))
		})
	}

	// const leftCursor = tweened(0, {
	// 	duration: 1000,
	// 	easing: quartInOut
	// })
	// const topCursor = tweened(0, {
	// 	duration: 2000,
	// 	easing: quartInOut
	// })

	// function handleClick() {
	// 	leftCursor.set(150)
	// 	setTimeout(() => {
	// 		leftCursor.set(0), topCursor.set(150)
	// 	}, 1000)
	// }

	const myImageM = new Image()
	const myImage = new Image()
	let menuButt,
		menuTel,
		topImage,
		offer,
		offerButton,
		offsetHeight,
		offsetTop,
		offsetWidth,
		topOffer,
		scaleFrame

	onMount(() => {
		//handleClick()
		cursorPosition()
		myImageM.src = '/top_bg_cat_m.webp'
		myImage.src = '/top_bg_cat.webp'
		if (myImage.complete) {
			notBlur()
		} else {
			myImage.addEventListener('load', (event) => {
				notBlur()
			})
		}
		window.addEventListener('load', (event) => {
			document.querySelector('#bgBlur').classList.add('transition')
		})
		menuButt = document.querySelector('#menu_butt')
		menuButt.addEventListener('click', () => {
			menuButt.querySelector('.hamburger').classList.toggle('is-active')
			menuButt.querySelector('.parent_bg_icon').classList.toggle('i_active')
			document
				.querySelector('#tel_butt .parent_bg_icon')
				.classList.remove('i_active')
			document.querySelector('#iconTelTop').classList.remove('t_active')
			document.querySelector('#telMenuTop').classList.remove('active')
			document.querySelector('#menuTop').classList.toggle('active')
		})
		menuTel = document.querySelector('#tel_butt')
		menuTel.addEventListener('click', () => {
			menuButt.querySelector('.hamburger').classList.remove('is-active')
			document
				.querySelector('#menu_butt .parent_bg_icon')
				.classList.remove('i_active')
			document.querySelector('#iconTelTop').classList.toggle('t_active')
			document
				.querySelector('#tel_butt .parent_bg_icon')
				.classList.toggle('i_active')
			document.querySelector('#menuTop').classList.remove('active')
			document.querySelector('#telMenuTop').classList.toggle('active')
		})
	})
	function notBlur() {
		document.querySelector('.bg-my_bg').style.backgroundImage =
			"url('/top_bg_cat.webp')"
		document.querySelector('#bgBlur').classList.add('transition')
		document.querySelector('#bgBlur').style.setProperty('display', 'none')
	}
</script>

<div class="w-[360px] overflow-hidden">
	<div class="w-[360px] h-[600px] absolute z-50">
		<div
			class="w-[30px] h-[30px] absolute bg-center bg-cover cursor_animate bg-no-repeat" />
	</div>
	<nav
		class="bg-gray-800  border-amber-400 border-b-4 border-solid rounded-t-lg drop-shadow-min flex flex-col  absolute justify-center  w-full z-40">
		<div class="basis-full flex flex-row justify-evenly w-full max-w-6xl">
			<div class="grow my-auto">
				<div class=" my-auto new_black_w64 text-[1.6rem] pl-3 text-amber-400">
					TRACTORCAT
				</div>
			</div>
			<div id="tel_butt">
				<div class="parent_bg_icon pbi1">
					<div class="-skew-x-12 bg_icon h-full relative z-10" />
				</div>
				<div class="absolute z-20" id="iconTelTop">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						id="Слой_1"
						style="enable-background:new 0 0 100 100; overflow:visible"
						version="1.1"
						viewbox="0 0 100 100"
						x="0px"
						space="preserve"
						y="0px">
						<g>
							<path
								class="st0"
								d="M87.4,18.3C87,40.6,58.5,73,41,86.4c-13.8,10.6-18.4,13.1-28.3-3.2C10.2,79,19.5,69,23.9,64.9 c5.2-4.8,9.2,0.7,13.6,2.4c4.9,2,8.5-3.2,11.1-6.4C54.2,54.1,63,47.6,64,38.7c0.5-4.5-4.9-7-7.4-10.4c-1.4-1.9-0.2-4,1.1-5.5 c3.9-4.9,7.4-10.4,12.3-14.4c4.2-3.5,10.4,2.3,14.3,5.1C85.9,14.6,87.5,16.2,87.4,18.3z" />
						</g>
					</svg>
				</div>
			</div>
			<div id="menu_butt">
				<div class="parent_bg_icon  pbi2">
					<div class="-skew-x-12 bg_icon h-full relative z-10" />
				</div>
				<div class="absolute z-20" id="iconMenuTop">
					<div class="col three">
						<div class="hamburger" id="hamburger-2">
							<span class="line" /> <span class="line" /> <span class="line" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="bg-amber-400 flex flex-col italic justify-evenly md:hidden my_bold text-[1.6rem] text-center text-gray-800"
			id="menuTop">
			<a
				class="h-full hover:text-amber-400 text-gray-800 my-auto px-2 w-full  text-[1.6rem]"
				href="/#why_us">Почему мы?</a
			><a
				class="h-full hover:text-amber-400 text-gray-800 my-auto px-2 w-full  text-[1.6rem]"
				href="/#prise">Цены</a
			><a
				class="h-full hover:text-amber-400 text-gray-800 my-auto px-2 w-full  text-[1.6rem]"
				href="/#contacts">Контакты</a>
		</div>
		<div class="bg-amber-400 col md:hidden text-gray-800" id="telMenuTop">
			<div class="flex flex-row justify-evenly">
				<a
					class="align-middle grow inline-block items-center my_bold_ital pr-2 tel  text-[1.6rem] text-gray-800"
					href="tel:+79183789210">+7 918 37 89 210</a
				><a
					class="col m-0 p-0 whattapp"
					href="https://wa.me/+79183789210?text=Добрый%20день!"
					title="whatsapp +7 918 37 89 210"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						id="Layer_1"
						style="enable-background:new 0 0 418.1 418.1;"
						version="1.1"
						viewbox="0 0 418.1 418.1"
						x="0px"
						space="preserve"
						y="0px">
						<g>
							<path
								class="st0"
								d="M198.9,0.2C88.5,5.5,1.4,97.5,1.7,208c0.1,33.7,8.2,65.5,22.6,93.5l-22,106.9c-1.2,5.8,4,10.8,9.8,9.5 l104.7-24.8c26.9,13.4,57.1,21.1,89.1,21.6c112.9,1.7,207-87.9,210.5-200.7C420.1,93.1,320.3-5.5,198.9,0.2z M323.9,322.2 c-30.7,30.7-71.4,47.6-114.8,47.6c-25.4,0-49.7-5.7-72.3-16.9l-14.6-7.3L58,360.8l13.5-65.6l-7.2-14.1 c-11.7-22.9-17.6-47.7-17.6-73.7c0-43.4,16.9-84.1,47.6-114.8C124.6,62.2,166.1,45,209.1,45c43.4,0,84.1,16.9,114.8,47.6 c30.7,30.7,47.6,71.4,47.6,114.8C371.4,250.4,354.3,291.8,323.9,322.2z" />
							<path
								class="st0"
								d="M309.7,252.4l-40.2-11.5c-5.3-1.5-11,0-14.8,3.9l-9.8,10c-4.1,4.2-10.4,5.6-15.9,3.4c-19-7.7-59-43.2-69.2-61 c-2.9-5.1-2.5-11.5,1.2-16.2l8.6-11.1c3.4-4.3,4.1-10.2,1.8-15.2l-16.9-38.2c-4-9.2-15.7-11.8-23.4-5.4 c-11.2,9.5-24.5,23.9-26.1,39.9c-2.9,28.1,9.2,63.6,54.9,106.2c52.7,49.2,95,55.7,122.4,49.1c15.6-3.8,28.1-18.9,35.9-31.3 C323.6,266.3,319.3,255.1,309.7,252.4z" />
						</g>
					</svg></a>
			</div>
			<div class="flex flex-row justify-evenly">
				<a
					class="align-middle grow inline-block items-center leading-[0.6] my_bold_ital pr-2 tel  text-[1.6rem] text-gray-800"
					href="tel:+79180944607">+7 918 09 44 607</a
				><a
					class="col m-0 p-0 whattapp"
					href="https://wa.me/+79180944607?text=Добрый%20день!"
					title="whatsapp +7 918 09 44 607"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						id="Layer_1"
						style="enable-background:new 0 0 418.1 418.1;"
						version="1.1"
						viewbox="0 0 418.1 418.1"
						x="0px"
						space="preserve"
						y="0px">
						<g>
							<path
								class="st0"
								d="M198.9,0.2C88.5,5.5,1.4,97.5,1.7,208c0.1,33.7,8.2,65.5,22.6,93.5l-22,106.9c-1.2,5.8,4,10.8,9.8,9.5 l104.7-24.8c26.9,13.4,57.1,21.1,89.1,21.6c112.9,1.7,207-87.9,210.5-200.7C420.1,93.1,320.3-5.5,198.9,0.2z M323.9,322.2 c-30.7,30.7-71.4,47.6-114.8,47.6c-25.4,0-49.7-5.7-72.3-16.9l-14.6-7.3L58,360.8l13.5-65.6l-7.2-14.1 c-11.7-22.9-17.6-47.7-17.6-73.7c0-43.4,16.9-84.1,47.6-114.8C124.6,62.2,166.1,45,209.1,45c43.4,0,84.1,16.9,114.8,47.6 c30.7,30.7,47.6,71.4,47.6,114.8C371.4,250.4,354.3,291.8,323.9,322.2z" />
							<path
								class="st0"
								d="M309.7,252.4l-40.2-11.5c-5.3-1.5-11,0-14.8,3.9l-9.8,10c-4.1,4.2-10.4,5.6-15.9,3.4c-19-7.7-59-43.2-69.2-61 c-2.9-5.1-2.5-11.5,1.2-16.2l8.6-11.1c3.4-4.3,4.1-10.2,1.8-15.2l-16.9-38.2c-4-9.2-15.7-11.8-23.4-5.4 c-11.2,9.5-24.5,23.9-26.1,39.9c-2.9,28.1,9.2,63.6,54.9,106.2c52.7,49.2,95,55.7,122.4,49.1c15.6-3.8,28.1-18.9,35.9-31.3 C323.6,266.3,319.3,255.1,309.7,252.4z" />
						</g>
					</svg></a>
			</div>
		</div>
	</nav>
	<div class="h-[52px]" />
	<div
		bind:this={topImage}
		class="bg-gray-800 h-[490px] bg-center bg-cover bg-my_bg bg-no-repeat  flex items-center  w-full "
		style="background-image:url(/top_bg_cat.webp)">
		<div class="backdrop-blur-sm h-[70vh]  w-full  " id="bgBlur" />
		<div
			bind:this={offer}
			id="offer"
			class="min-h-[200px] w-[340px]"
			style="top:{topOffer}px">
			<div class="-left-4 relative" id="of_cont">
				<div
					class="-skew-x-12 blur_div absolute bg-zinc-900/20 border-amber-400 border-r-[22px] border-solid h-full inline-block my-auto text-right w-full" />
				<div class="my_bold_ital p-5 pr-8 relative  text-white z-10" id="realH1">
					<h1 class="whitespace-nowrap text-[18px]">
						СРОЧНЫЙ ВЫЕЗДНОЙ<br />РЕМОНТ СПЕЦТЕХНИКИ<br /><small class="text-[13px]"
							>ПО КРАСНОДАРСКОМУ КРАЮ И РЯДОМ</small>
					</h1>
				</div>
				<div
					bind:this={offerButton}
					class="[&_button]:hover:text-white [&_div]:hover:bg-gray-800 absolute bottom-[-53px]  right-[19px] "
					id="of_butt">
					<div
						class="-skew-x-12 absolute border_ani border-gray-800 border-r-[2px] border-solid h-full right-[-1px] w-full z-20" />
					<div
						class="-skew-x-12 absolute bg-amber-400 border_ani border-gray-800 border-r-[21px] border-solid h-full w-full z-10" />
					<button
						class="italic my_bold pl-8 pr-10 relative text-gray-800 py-2 z-30"
						data-bs-target="#exampleModal"
						data-bs-toggle="modal"
						id="popupButton"><span>ОТПРАВИТЬ ЗАЯВКУ</span></button>
				</div>
			</div>
		</div>
	</div>
	<div class="transition" />
	<div
		class="bg-amber-400 brand grid grid-cols-2 justify-evenly  pb-6 place-items-center">
		<div>
			<img
				alt="Terrex"
				class="w-full"
				height="59"
				loading="lazy"
				src="/logos/terrex.svg"
				width="193" />
		</div>
		<div>
			<img
				alt="Cat &amp; JCB"
				class="w-full"
				height="48"
				loading="lazy"
				src="/logos/cat_jcb.svg"
				width="187" />
		</div>
		<div>
			<img
				alt="Cukurova"
				class="w-full"
				height="65"
				loading="lazy"
				src="/logos/cukurova.svg"
				width="140" />
		</div>
		<div>
			<img
				alt="Mecalac"
				class="w-full"
				height="58"
				loading="lazy"
				src="/logos/mecalac.svg"
				width="174" />
		</div>
		<div>
			<img
				alt="Volvo"
				class="w-full"
				height="61"
				loading="lazy"
				src="/logos/volvo.svg"
				width="185" />
		</div>
		<div>
			<img
				alt="Hitachi"
				class="w-full"
				height="53"
				loading="lazy"
				src="/logos/hitachi.svg"
				width="161" />
		</div>
	</div>
</div>

<style>
	.cursor_animate {
		left: 0;
		top: 15px;
		background-image: url(/ncursorhand.png);
		animation: cursor-move 11.5s ease infinite;
	}
	@keyframes cursor-move {
		0% {
			left: 0;
			top: 15px;
		}
		10% {
			left: 270px;
			top: 15px;
		}
		30% {
			left: 270px;
			top: 15px;
		}
		36% {
			left: 320px;
			top: 15px;
		}
		56% {
			left: 320px;
			top: 15px;
		}
		63% {
			left: 180px;
			top: 150px;
			background-image: url(/ncursorhand.png);
		}
		63.1% {
			left: 180px;
			top: 150px;
			background-image: url(/scroll.png);
		}
		80% {
			left: 180px;
			top: 150px;
			background-image: url(/scroll.png);
		}
		80.1% {
			left: 180px;
			top: 150px;
			background-image: url(/ncursorhand.png);
		}
		85% {
			left: 0;
			top: 15px;
		}
		100% {
			left: 0;
			top: 15px;
		}
	}

	.bg-my_bg {
		animation: bg-my_bg 11.5s ease infinite;
	}
	#offer {
		animation: offer 11.5s ease infinite;
	}
	.brand {
		animation: bg-my_bg 11.5s ease infinite;
	}
	@keyframes bg-my_bg {
		0% {
		}
		63% {
			transform: translateY(0px);
		}
		73% {
			transform: translateY(-165px);
		}
		80% {
			transform: translateY(0px);
		}
		100% {
		}
	}
	@keyframes offer {
		0% {
		}
		63% {
			transform: translateY(0px);
		}
		73% {
			transform: translateY(165px);
		}
		80% {
			transform: translateY(0px);
		}
		100% {
		}
	}

	.transition {
		transition: 2s;
		backdrop-filter: blur(0px);
	}

	#special:after,
	#special:before {
		border-left: 300px solid transparent;
		border-right: 300px solid transparent;
		content: '';
		left: 0;
		position: absolute;
	}
	#special:before {
		border-bottom: 25px solid #1f2937;
		top: -25px;
	}
	#special:after {
		border-top: 25px solid #1f2937;
		bottom: -25px;
	}
	.blur_div:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		backdrop-filter: blur(5px);
	}
	#realH1 {
		background: linear-gradient(
			90deg,
			rgba(31, 41, 55, 1) 3%,
			rgba(31, 41, 55, 0.3) 5%,
			rgba(31, 41, 55, 0) 93%,
			rgba(31, 41, 55, 0) 100%
		);
	}
	.border_ani {
		animation: color-change 1s linear infinite;
	}
	@keyframes color-change {
		0%,
		to {
			border-color: #1f2937;
		}
		50% {
			border-color: #2f2d50;
		}
	}
</style>
