<script>
	import { onMount } from 'svelte'
	import '../styles/global.scss'
	const myImageM = new Image()
	const myImage = new Image()
	let lastScrollPos = 0
	let tickingScroll = false
	let scrollStart = false
	let scrollUp = false
	let defaultOfferPosTop
	let maxScrollOffer
	let offer,
		offerButton,
		topImage,
		nav,
		topOffer,
		timeoutResize,
		resizeWidth,
		parentShiftDiv,
		angleSvg,
		bindScrollY
	$: bindScrollY == 0 && scrollListener()
	$: resizeWidth && clearTimeout(timeoutResize)
	$: resizeWidth && timerToResize()

	onMount(() => {
		bindScrollY = window.scrollY
		resizeWidth = nav.clientWidth
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
	})

	function scrollListener() {
		setBaseOfferLet()
		window.document.addEventListener('scroll', (e) => {
			scrollUp = lastScrollPos > window.scrollY ? true : false
			lastScrollPos = window.scrollY
			doSomething(lastScrollPos)
		})
	}

	function setBaseOfferLet() {
		offer.style.setProperty('position', 'static')
		defaultOfferPosTop = offer.getBoundingClientRect().top

		maxScrollOffer =
			topImage.clientHeight +
			nav.clientHeight -
			offerButton.getBoundingClientRect().top -
			offerButton.clientHeight
	}

	function notBlur() {
		document.querySelector('.bg-my_bg').style.backgroundImage =
			"url('/top_bg_cat.webp')"
		document.querySelector('#bgBlur').classList.add('transition')
		document.querySelector('#bgBlur').style.setProperty('display', 'none')
	}

	function doSomething(scrollPos) {
		if (scrollPos < maxScrollOffer) {
			topOffer = defaultOfferPosTop + scrollPos
			offer.style.setProperty('position', 'absolute')
		}
		if (scrollPos >= maxScrollOffer) {
			topOffer = defaultOfferPosTop + maxScrollOffer
			offer.style.setProperty('position', 'absolute')
		}
		if (scrollPos <= topImage.clientHeight) {
			topImage.style.setProperty(
				'background-position-y',
				'calc(50% + ' + scrollPos / 2 + 'px)'
			)
		}
	}
	function timerToResize() {
		timeoutResize = setTimeout(() => {
			setBaseOfferLet()
			shiftFactor()
		}, 200)
	}

	function shiftFactor() {
		let allShiftDiv = parentShiftDiv.querySelectorAll('div')
		for (let e = 0; e < allShiftDiv.length; e++) {
			let i =
				((angleSvg.offsetHeight -
					allShiftDiv[e].offsetTop +
					parentShiftDiv.offsetTop) *
					angleSvg.offsetWidth) /
				angleSvg.offsetHeight
			allShiftDiv[e].style.setProperty('margin-left', -i + 'px')
		}
	}
</script>

<svelte:window bind:scrollY={bindScrollY} />
<div class="w-full">
	<nav
		bind:this={nav}
		bind:clientWidth={resizeWidth}
		class="bg-gray-800 border-amber-400 h-[64px] border-b-4 border-solid drop-shadow-min flex flex-row justify-center w-full fixed z-50 px-2">
		<div class="basis-full flex flex-row justify-evenly w-full max-w-6xl">
			<div class="grow my-auto">
				<div
					class=" my-auto new_black_w64 text-4xl pl-3 text-center text-amber-400">
					TRACTORCAT
				</div>
			</div>
			<div class="basis-full flex flex-row items-stretch" id="md_menu">
				<div
					class="basis-full flex flex-row  my_font_fam font-medium text-base items-stretch justify-end text-right text-white pr-3">
					<div
						class="flex cursor-pointer h-full hover:text-amber-400 items-center border-4 border-solid border-transparent hover:border-b-amber-400 mx-3 pt-2 my-auto pb-2 px-2">
						Почему мы?
					</div>
					<div
						class="flex cursor-pointer h-full hover:text-amber-400 items-center border-4 border-solid border-transparent hover:border-b-amber-400 mx-3 pt-2 my-auto pb-2 px-2">
						Цены
					</div>
					<div
						class="flex cursor-pointer h-full hover:text-amber-400 items-center border-4 border-solid border-transparent hover:border-b-amber-400 mx-3 pt-2 my-auto pb-2 px-2">
						Контакты
					</div>
				</div>
				<div
					class="flex flex-row items-stretch justify-evenly basis-auto text-2xl my_bold_ital  text-yellow-400">
					<div
						class="flex  cursor-pointer pr-3 hover:text-white items-center text-right whitespace-nowrap xl:pr-5">
						+7 918 37 89 210
					</div>
					<div
						class="flex cursor-pointer pr-3 hover:text-white items-center text-right whitespace-nowrap">
						+7 918 09 44 607
					</div>
				</div>
			</div>
		</div>
	</nav>
	<div class="h-[64px]" />
	<div
		bind:this={topImage}
		class="bg-gray-800 bg-center bg-cover bg-my_bg bg-no-repeat  flex items-center  h-[70vh] w-full "
		style="background-image:url(/top_bg_cat.webp)">
		<div class="backdrop-blur-sm h-[70vh]  w-full  " id="bgBlur" />
		<div
			bind:this={offer}
			id="offer"
			class="min-h-[200px]"
			style="top:{topOffer}px">
			<div class="-left-4 absolute" id="of_cont">
				<div
					class="-skew-x-12 blur_div absolute bg-zinc-900/20 border-amber-400 border-r-[22px] border-solid h-full inline-block my-auto text-right w-full" />
				<div
					class="md:pl-10 my_bold_ital p-5 pr-8 relative sm:pl-12 sm:pr-10 text-white lg:pl-48 xl:pl-80 z-10"
					id="realH1">
					<h1 class="whitespace-nowrap text-[2rem]">
						СРОЧНЫЙ ВЫЕЗДНОЙ<br />РЕМОНТ СПЕЦТЕХНИКИ<br /><small
							>ПО КРАСНОДАРСКОМУ КРАЮ И РЯДОМ</small>
					</h1>
				</div>
				<div
					bind:this={offerButton}
					class="[&_button]:hover:text-white [&_div]:hover:bg-gray-800 absolute bottom-[-53px]  right-[29px] "
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
</div>
<div class="transition" />
<div class="bg-amber-400 flex flex-row justify-evenly items-center pb-6 ">
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
<div
	id="special"
	class=" bg-gray-800 bottom-[20px] relative w-[600px] m-0 md:bottom-[28px] mx-auto my_bold_ital text-amber-400 text-center">
	<h2 class="text-[1.2rem] leading-5">
		СПЕЦИАЛИЗИРУЕМСЯ НА РЕМОНТЕ<br /><small
			class="font-medium italic my_font_fam text-[0.8rem] uppercase"
			>техники с идентичными компонентами</small>
	</h2>
</div>
<div class="grid justify-evenly grid-cols-5 place-items-center" id="machin">
	<div class="d-flex">
		<img
			alt="Экскаватор погрузчик"
			class="w-full"
			height="174"
			loading="lazy"
			src="/machin/05.webp"
			width="295" />
	</div>
	<div class="d-flex">
		<img
			alt="Экскаватор"
			class="w-full"
			height="174"
			loading="lazy"
			src="/machin/04.webp"
			width="295" />
	</div>
	<div class="d-flex">
		<img
			alt="Фронтальный погрузчик"
			class="w-full"
			height="174"
			loading="lazy"
			src="/machin/03.webp"
			width="295" />
	</div>
	<div class="d-flex">
		<img
			alt="Дорожный каток"
			class="w-full"
			height="174"
			loading="lazy"
			src="/machin/02.webp"
			width="295" />
	</div>
	<div class="col-span-2 d-flex sm:col-span-1 text-center">
		<img
			alt="Бульдозер"
			class="w-full"
			height="174"
			loading="lazy"
			src="/machin/01.webp"
			width="295" />
	</div>
</div>
<section>
	<div class="w-fuul grid grid-cols-[1fr_96px_1fr]" id="why_us">
		<div class="grow self-center">
			<h2
				class="px-3 text-right text-4xl my_bold_ital  text-gray-800 whitespace-nowrap">
				Почему мы?
			</h2>
		</div>
		<div class="" bind:this={angleSvg}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="items-stretch"
				height="100%"
				preserveaspectratio="none"
				viewbox="0 0 96 200"
				width="96">
				<path d="M96 200L0 0H96V200Z" fill="#1f2937" />
			</svg>
		</div>
		<div
			bind:this={parentShiftDiv}
			class="[&_div]:pb-4 [&_div]:pl-2 
			 [&_h4]:text-amber-400 [&_h4]:text-center 
			[&_p]:text-justify bg-gray-800 grow [&_div]:max-w-md xm:[&_div]:pl-10 xm:[&_h4]:text-left xm:[&_p]:text-left xm:py-8 px-2 text-white">
			<div style="padding-top: 0.5rem;">
				<h4 class="my_bold_ital text-2xl">Адекватные цены</h4>
				<p>Ремонт на уровне официального дилерского центра по лучшим ценам</p>
			</div>
			<div>
				<h4 class="my_bold_ital text-2xl">Профессионалы</h4>
				<p>
					Мы - команда сертифицированных специалистов из официальных дилеров
					Zeppelin, Lonmadi, Мировая техника
				</p>
			</div>
			<div>
				<h4 class="my_bold_ital text-2xl">Даем гарантию</h4>
				<p>
					Ответственно подходим к задачам, ценим клиента и даем гарантию на
					выполненные работы.
				</p>
			</div>
			<div>
				<h4 class="my_bold_ital text-2xl">Узкая специализация</h4>
				<p>
					Обслуживание техники имеющих идентичные компоненты, позволяет детально
					разбираться в особенностях каждого узла, сокращая время выполнения работ и
					стоимость.
				</p>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="bg-gray-400 w-fuul grid grid-cols-[1fr_96px_1fr]">
		<div class="bg-gray-400 grow self-center">
			<h2
				class="px-3 text-right text-4xl my_bold_ital  text-gray-800 whitespace-nowrap">
				Цены
			</h2>
		</div>
		<div class="bg-amber-400">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="100%"
				preserveaspectratio="none"
				viewbox="0 0 80 200"
				width="96">
				<path d="M0 0H80L0 200V0Z" fill="#9ca3af" />
			</svg>
		</div>
		<div class="bg-amber-400 grow text-gray-800">
			<div class="pl-8 py-10 p-2 ">
				<p>
					Работаем по фиксированной цене<br />нормо-часа: <strong>1500</strong> р.
				</p>
				<br />
				<p>
					Итоговая стоимость определяется по факту выполненной работы, в зависимости
					от трудозатрат. Основной критерий это состояние болтов и креплений - если
					не прикипели, можно смело ориентироваться на минимальную цену.
				</p>
			</div>
		</div>
	</div>
</section>
<div class="w-full  pb-24">
	<p class="text-9xl text-slate-700 text-center">...</p>
</div>

<style>
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
