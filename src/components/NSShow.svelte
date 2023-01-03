<script>
	import { Navigation, Pagination, FreeMode, Thumbs, Grid } from 'swiper'
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { onMount } from 'svelte'
	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/pagination'
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
		const popSX = document.querySelector('#popupSX'),
			popupSlider = document.querySelector('#popupSlider'),
			popupSBg = document.querySelector('#popupSBg'),
			thumbsSlideSwiper = document.querySelectorAll('.mySwiper3 .swiper-slide')
		function toggleHidden() {
			//popupSlider.classList.toggle('hidden')
			popupSlider.firstElementChild.classList.toggle('hidden_1x1')
			popupSBg.classList.toggle('hidden_1x1')
		}

		for (let i = 0; i < thumbsSlideSwiper.length; i++) {
			thumbsSlideSwiper[i].addEventListener('click', () => toggleHidden())
		}

		popSX.addEventListener('click', () => toggleHidden())
		popupSBg.addEventListener('click', () => toggleHidden())
	})
</script>

<div class="absolute" id="popupSlider">
	<div
		class="fixed flex h-full items-center justify-center shadow-md top-0 w-full z-50  hidden_1x1">
		<div
			class="bg-gray-900 bg-opacity-80 fixed h-[100vh] sticky-0 top-0 w-full z-30 hidden_1x1"
			id="popupSBg" />
		<button
			aria-label="close"
			class="absolute dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 right-2 text-white top-2 z-[999]"
			id="popupSX">
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
		<div class="w-[100vw] h-[60vh] xm:h-[100vh] flex items-center justify-center">
			<Swiper
				style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff"
				loop={true}
				spaceBetween={0}
				navigation={true}
				preloadImages={false}
				pagination={{ clickable: true, dynamicBullets: true }}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Pagination, Thumbs]}
				class="mySwiper2 h-[70vh] z-30">
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
						<img loading="lazy" src="/other/enjoyment.svg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
						<img loading="lazy" src="/other/studilator.svg" />
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						class="bg-slate-600  col-span-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
						<img
							loading="lazy"
							src="/other/polara.svg"
							class=" w-full max-w-full h-auto max-h-full" />
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						class="w-full  bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
						<div
							class="w-full flex flex-col justify-center items-center backdrop-blur-[4px] overflow-hidden">
							<img
								loading="lazy"
								src="/other/laboratory.png"
								style="max-height:640px" />
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
						<img loading="lazy" class=" pr-[10px] pt-[10px]" src="/other/deft.svg" />
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						class="w-full h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400"
						style="display:grid; place-content: center; height: 100%; max-height:640px">
						<h1
							class="text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
							А еще <br />создаю<br /> логотипы
						</h1>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
						<img loading="lazy" src="/other/zver.svg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-600  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
						<img loading="lazy" src="/other/hewlic.svg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="bg-slate-100  ">
						<img loading="lazy" src="/other/zivil.svg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
						<img loading="lazy" src="/other/knifecut.svg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
						<img loading="lazy" src="/other/arxware.svg" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/3d/dz_01.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img
							loading="lazy"
							src="/other/3d/rotunda_01.webp"
							style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img
							loading="lazy"
							src="/other/3d/cupboard_01.webp"
							style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img
							loading="lazy"
							src="/other/3d/cupboard_m_01.webp"
							style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img
							loading="lazy"
							src="/other/3d/cupboard_02.webp"
							style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img
							loading="lazy"
							src="/other/3d/kalinina.webp"
							style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="w-full h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400"
						style="display:grid; place-content: center;  height: 100%; max-height:640px">
						<h1
							class="text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
							Могу <br />в 3D<br />
						</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img
							loading="lazy"
							src="/other/3d/sber_02.webp"
							style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img
							loading="lazy"
							src="/other/3d/rotunda_02.webp"
							style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img
							loading="lazy"
							src="/other/3d/sunfill.webp"
							style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/03.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/01.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/04.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/05.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/06.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/07.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="w-full h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-sky-300 to-blue-400"
						style="display:grid; place-content: center;  height: 100%; max-height:640px">
						<h1
							class="text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
							Рисую<br /> Скульпчу<br /> Проектирую
						</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/10.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/09.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/11.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/02.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200"
						style="display:grid; place-content: center;">
						<img loading="lazy" src="/other/other/12.webp" style="max-height:640px" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</div>
<div class="w-[100vw] h-[60vh] xm:h-[100vh]">
	<Swiper
		on:swiper={setThumbsSwiper}
		spaceBetween={0}
		slidesPerView={1}
		preloadImages={false}
		grid={{
			rows: 3
		}}
		breakpoints={{
			480: {
				slidesPerView: 2
			},
			640: {
				slidesPerView: 4
			}
		}}
		navigation={true}
		pagination={{ clickable: true, dynamicBullets: true }}
		modules={[Grid, Navigation, Pagination, Thumbs]}
		class="mySwiper3 w-[100vw] h-[70vh] xm:h-[100vh] py-10">
		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
				<img loading="lazy" src="/other/enjoyment.svg" />
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
				<img loading="lazy" src="/other/studilator.svg" />
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div
				class="bg-slate-600  col-span-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
				<img
					loading="lazy"
					class=" w-full max-w-full h-auto max-h-full"
					src="/other/polara.svg" />
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div
				class="w-full  bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
				<div
					class="w-full h-full flex flex-col justify-center items-center backdrop-blur-[1px] overflow-hidden">
					<img loading="lazy" src="/other/laboratory.png" />
				</div>
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
				<img loading="lazy" class=" pr-[10px] pt-[10px]" src="/other/deft.svg" />
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div class="">
				<h1
					class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
					А еще <br />создаю<br /> логотипы
				</h1>
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
				<img loading="lazy" src="/other/zver.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-600  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
				<img loading="lazy" src="/other/hewlic.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div class="bg-slate-100  ">
				<img loading="lazy" src="/other/zivil.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
				<img loading="lazy" src="/other/knifecut.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div
				class="bg-slate-300  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
				<img loading="lazy" src="/other/arxware.svg" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/dz_01.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/rotunda_01.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/cupboard_01.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/cupboard_m_01.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/cupboard_02.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/kalinina.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<div class="">
				<h1
					class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
					Могу <br />в 3d
				</h1>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/sber_02.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/rotunda_02.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/3d/sunfill.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/03.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/01.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/04.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/05.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/06.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/07.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide>
		<SwiperSlide>
			<div class="">
				<h1
					class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
					Рисую<br /> Скульпчу<br /> Проектирую
				</h1>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/10.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/09.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/11.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/02.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide><SwiperSlide>
			<img
				loading="lazy"
				src="/other/other/12.webp"
				class="object-cover w-full h-full" />
		</SwiperSlide>
	</Swiper>
</div>
