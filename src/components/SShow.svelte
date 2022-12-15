<script>
	import {
		Navigation,
		Pagination,
		A11y,
		FreeMode,
		Thumbs,
		Grid,
		Lazy
	} from 'swiper'

	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { onMount } from 'svelte'
	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/pagination'
	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/thumbs'
	import 'swiper/css/grid'
	import '../styles/global.scss'

	let thumbsSwiper = null

	const setThumbsSwiper = (e) => {
		const [swiper] = e.detail
		// set Thumbs swiper instance
		setTimeout(() => {
			thumbsSwiper = swiper
		})
	}
	onMount(() => {
		const popX = document.querySelector('#popupX'),
			popupSlider = document.querySelector('#popupSlider'),
			popupBg = document.querySelector('#popupBg'),
			thumbsSlideSwiper = document.querySelector('.mySwiper3')
		function toggleHidden() {
			popupSlider.classList.toggle('hidden')
		}
		thumbsSlideSwiper.addEventListener('click', () => toggleHidden())
		popX.addEventListener('click', () => toggleHidden())
		popupBg.addEventListener('click', () => toggleHidden())
	})
</script>

<div class="w-[100vw] h-[30vh] hidden" id="popupSlider">
	<div
		class="fixed flex h-full items-center justify-center shadow-md top-0 w-full z-40">
		<div
			class="bg-gray-900 bg-opacity-80 fixed h-full sticky-0 top-0 w-full z-30"
			id="popupBg" />
		<button
			aria-label="close"
			class="absolute dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 right-2 text-gray-400 top-2 z-[999]"
			id="popupX">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24">
				<path
					d="M18 6L6 18"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.66667" />
				<path
					d="M6 6L18 18"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.66667" />
			</svg>
		</button>
		<Swiper
			style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff"
			spaceBetween={10}
			navigation={true}
			lazy={{
				enabled: true,
				loadPrevNext: true,
				loadPrevNextAmount: 2,
				loadOnTransitionStart: true
			}}
			thumbs={{ swiper: thumbsSwiper }}
			modules={[FreeMode, Navigation, Thumbs, Lazy]}
			class="mySwiper2 h-[30vh] z-50">
			<SwiperSlide>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
					<img class="swiper-lazy" src="/other/enjoyment.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
					<img class="swiper-lazy" src="/other/studilator.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-600 grid col-span-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
					<img
						class="swiper-lazy w-full max-w-full h-auto max-h-full"
						src="/other/polara.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="w-full grid bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
					<div
						class="w-full h-full flex flex-col justify-center items-center backdrop-blur-[1px] overflow-hidden">
						<img class="swiper-lazy" src="/other/laboratory.png" />
					</div>
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
					<img class="swiper-lazy pr-[10px] pt-[10px]" src="/other/deft.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="grid">
					<h1
						class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
						А еще <br />создаю<br /> логотипы
					</h1>
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
					<img class="swiper-lazy" src="/other/zver.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-600 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
					<img class="swiper-lazy" src="/other/hewlic.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="bg-slate-100 grid ">
					<img class="swiper-lazy" src="/other/zivil.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
					<img class="swiper-lazy" src="/other/knifecut.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
					<img class="swiper-lazy" src="/other/arxware.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="w-[100vw] h-[60vh] xm:h-[100vh] grid ">
					<div class="grid bg-[url('/other/3d/dz_01.webp')] bg-cover bg-center" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
					<img class="swiper-lazy" src="/other/enjoyment.svg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
					<img class="swiper-lazy" src="/other/studilator.svg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
					<img
						class="swiper-lazy w-full max-w-full h-auto max-h-full"
						src="/other/polara.svg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					class="w-full bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
					<div
						class="w-full h-full flex flex-col justify-center items-center backdrop-blur-[1px] overflow-hidden">
						<img class="swiper-lazy" src="/other/laboratory.png" />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
					<img class="swiper-lazy pr-[10px] pt-[10px]" src="/other/deft.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="">
					<h1
						class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
						А еще <br />создаю<br /> логотипы
					</h1>
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
					<img class="swiper-lazy" src="/other/zver.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
					<img class="swiper-lazy" src="/other/hewlic.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="bg-slate-100 ">
					<img class="swiper-lazy" src="/other/zivil.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
					<img class="swiper-lazy" src="/other/knifecut.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
					<img class="swiper-lazy" src="/other/arxware.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="w-[100vw] h-[60vh] xm:h-[100vh] ">
					<div class="bg-[url('/other/3d/dz_01.webp')] bg-cover bg-center" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
					<img class="swiper-lazy" src="/other/enjoyment.svg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
					<img class="swiper-lazy" src="/other/studilator.svg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
					<img
						class="swiper-lazy w-full max-w-full h-auto max-h-full"
						src="/other/polara.svg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					class="w-full bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
					<div
						class="w-full h-full flex flex-col justify-center items-center backdrop-blur-[1px] overflow-hidden">
						<img class="swiper-lazy" src="/other/laboratory.png" />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
					<img class="swiper-lazy pr-[10px] pt-[10px]" src="/other/deft.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="">
					<h1
						class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
						А еще <br />создаю<br /> логотипы
					</h1>
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
					<img class="swiper-lazy" src="/other/zver.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
					<img class="swiper-lazy" src="/other/hewlic.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="bg-slate-100 ">
					<img class="swiper-lazy" src="/other/zivil.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
					<img class="swiper-lazy" src="/other/knifecut.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div
					class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
					<img class="swiper-lazy" src="/other/arxware.svg" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
			<SwiperSlide>
				<div class="w-[100vw] h-[60vh] xm:h-[100vh] ">
					<div class="bg-[url('/other/3d/dz_01.webp')] bg-cover bg-center" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div></SwiperSlide>
		</Swiper>
	</div>
</div>
<div class="w-[100vw] h-[100vh] ">
	<Swiper
		on:swiper={setThumbsSwiper}
		spaceBetween={0}
		slidesPerView={4}
		grid={{
			rows: 3
		}}
		navigation={true}
		modules={[Grid, Navigation, Thumbs]}
		class="mySwiper3 w-[100vw] h-[100vh]">
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
				<img class="swiper-lazy" src="/other/enjoyment.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
				<img class="swiper-lazy" src="/other/studilator.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
				<img
					class="swiper-lazy w-full max-w-full h-auto max-h-full"
					src="/other/polara.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div class="w-full bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
				<div
					class="w-full h-full flex flex-col justify-center items-center backdrop-blur-[1px] overflow-hidden">
					<img class="swiper-lazy" src="/other/laboratory.png" />
				</div>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
				<img class="swiper-lazy pr-[10px] pt-[10px]" src="/other/deft.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="">
				<h1
					class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
					А еще <br />создаю<br /> логотипы
				</h1>
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
				<img class="swiper-lazy" src="/other/zver.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
				<img class="swiper-lazy" src="/other/hewlic.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="bg-slate-100 ">
				<img class="swiper-lazy" src="/other/zivil.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
				<img class="swiper-lazy" src="/other/knifecut.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
				<img class="swiper-lazy" src="/other/arxware.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="w-[100vw] h-[60vh] xm:h-[100vh] ">
				<div class="bg-[url('/other/3d/dz_01.webp')] bg-cover bg-center" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
				<img class="swiper-lazy" src="/other/enjoyment.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
				<img class="swiper-lazy" src="/other/studilator.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
				<img
					class="swiper-lazy w-full max-w-full h-auto max-h-full"
					src="/other/polara.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div class="w-full bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
				<div
					class="w-full h-full flex flex-col justify-center items-center backdrop-blur-[1px] overflow-hidden">
					<img class="swiper-lazy" src="/other/laboratory.png" />
				</div>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
				<img class="swiper-lazy pr-[10px] pt-[10px]" src="/other/deft.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="">
				<h1
					class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
					А еще <br />создаю<br /> логотипы
				</h1>
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
				<img class="swiper-lazy" src="/other/zver.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
				<img class="swiper-lazy" src="/other/hewlic.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="bg-slate-100 ">
				<img class="swiper-lazy" src="/other/zivil.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
				<img class="swiper-lazy" src="/other/knifecut.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
				<img class="swiper-lazy" src="/other/arxware.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="w-[100vw] h-[60vh] xm:h-[100vh] ">
				<div class="bg-[url('/other/3d/dz_01.webp')] bg-cover bg-center" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
				<img class="swiper-lazy" src="/other/enjoyment.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
				<img class="swiper-lazy" src="/other/studilator.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
				<img
					class="swiper-lazy w-full max-w-full h-auto max-h-full"
					src="/other/polara.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div class="w-full bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
				<div
					class="w-full h-full flex flex-col justify-center items-center backdrop-blur-[1px] overflow-hidden">
					<img class="swiper-lazy" src="/other/laboratory.png" />
				</div>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
				<img class="swiper-lazy pr-[10px] pt-[10px]" src="/other/deft.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="">
				<h1
					class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
					А еще <br />создаю<br /> логотипы
				</h1>
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
				<img class="swiper-lazy" src="/other/zver.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-600 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
				<img class="swiper-lazy" src="/other/hewlic.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="bg-slate-100 ">
				<img class="swiper-lazy" src="/other/zivil.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
				<img class="swiper-lazy" src="/other/knifecut.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
				<img class="swiper-lazy" src="/other/arxware.svg" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="w-[100vw] h-[60vh] xm:h-[100vh] ">
				<div class="bg-[url('/other/3d/dz_01.webp')] bg-cover bg-center" />
				<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
			</div></SwiperSlide>
	</Swiper>
</div>
