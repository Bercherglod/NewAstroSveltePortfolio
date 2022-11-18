<script>
	import { Navigation, Pagination, A11y } from 'swiper'

	import { Swiper, SwiperSlide } from 'swiper/svelte'

	// Import Swiper styles
	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/pagination'
	import '../styles/global.scss'
	let parentFrameWidth
</script>

<div class="w-[100vw] h-[60vh] xm:h-[100vh]">
	<Swiper
		modules={[Navigation, Pagination, A11y]}
		spaceBetween={0}
		slidesPerView={1}
		navigation
		pagination={{ clickable: true, dynamicBullets: true }}
		on:slideChange={() => console.log('slide change')}
		on:swiper={(e) => console.log(e.detail[0])}
		class="w-[100vw] h-[70vh] xm:h-[100vh] py-10">
		<SwiperSlide>
			<div class="w-[100vw] h-[60vh] xm:h-[100vh] grid ">
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-purple-300">
					<img src="/other/enjoyment.svg" />
				</div>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-blue-400">
					<img src="/other/studilator.svg" />
				</div>
				<div
					class="bg-slate-600 grid col-span-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-sky-200">
					<img src="/other/polara.svg" class="w-full max-w-full h-auto max-h-full" />
				</div>
				<div
					class="w-full grid bg-[url('/other/laboratory_bg.webp')] bg-cover bg-center">
					<div
						class="w-full h-full flex flex-col justify-center items-center backdrop-blur-[1px] overflow-hidden">
						<img src="/other/laboratory.png" />
					</div>
				</div>

				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-red-600">
					<img src="/other/deft.svg" class="pr-[10px] pt-[10px]" />
				</div>
				<div class="grid">
					<h1
						class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
						А еще <br />создаю<br /> логотипы
					</h1>
				</div>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 to-orange-600">
					<img src="/other/zver.svg" />
				</div>
				<div
					class="bg-slate-600 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-amber-400 to-amber-600">
					<img src="/other/hewlic.svg" />
				</div>
				<div class="bg-slate-100 grid ">
					<img src="/other/zivil.svg" />
				</div>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-gray-300">
					<img src="/other/knifecut.svg" />
				</div>
				<div
					class="bg-slate-300 grid bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
					<img src="/other/arxware.svg" />
				</div>
			</div></SwiperSlide>
		<SwiperSlide>
			<div class="w-[100vw] h-[60vh] xm:h-[100vh] grid ">
				<div class="grid bg-[url('/other/3d/dz_01.webp')] bg-cover bg-center" />
				<div
					class="grid bg-[url('/other/3d/rotunda_01.webp')] bg-cover bg-center" />
				<div
					class="grid bg-[url('/other/3d/cupboard_01.webp')] bg-cover bg-center" />
				<div
					class="grid bg-[url('/other/3d/cupboard_m_01.webp')] bg-cover bg-center" />
				<div
					class="grid bg-[url('/other/3d/cupboard_02.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/3d/kalinina.webp')] bg-cover bg-center" />
				<div class="grid">
					<h1
						class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
						Могу <br />в 3d
					</h1>
				</div>
				<div class="grid bg-[url('/other/3d/sber_02.webp')] bg-cover bg-center" />
				<div
					class="grid col-span-2 bg-[url('/other/3d/rotunda_02.webp')] bg-cover bg-bottom" />
				<div
					class="grid col-span-2 bg-[url('/other/3d/sunfill.webp')] bg-cover bg-center" />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div class="w-[100vw] h-[60vh] xm:h-[100vh] grid ">
				<div class="grid bg-[url('/other/other/03.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/01.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/04.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/05.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/06.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/07.webp')] bg-cover bg-center" />
				<div class="grid">
					<h1
						class="w-full text-base xm:text-4xl sm:text-4xl text-center font-bold text-white">
						Рисую<br /> Скульпчу<br /> Проектирую
					</h1>
				</div>
				<div class="grid bg-[url('/other/other/10.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/09.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/11.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/02.webp')] bg-cover bg-center" />
				<div class="grid bg-[url('/other/other/12.webp')] bg-cover bg-center" />
			</div>
		</SwiperSlide>
	</Swiper>
</div>
