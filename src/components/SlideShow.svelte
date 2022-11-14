<script>
	import { Navigation, Pagination, A11y } from 'swiper'

	import { Swiper, SwiperSlide } from 'swiper/svelte'

	// Import Swiper styles
	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/pagination'

	let parentFrameWidth
</script>

<div bind:clientWidth={parentFrameWidth} class="w-[100vh]">
	<Swiper
		modules={[Navigation, Pagination, A11y]}
		spaceBetween={50}
		slidesPerView={1}
		width={parentFrameWidth}
		navigation
		pagination={{ clickable: true, dynamicBullets: true }}
		on:slideChange={() => console.log('slide change')}
		on:swiper={(e) => console.log(e.detail[0])}>
		<SwiperSlide><img src="/images/boretouch_end.jpg" /></SwiperSlide>
		<SwiperSlide><img src="/images/deft_end.jpg" /></SwiperSlide>
		<SwiperSlide><img src="/images/isk_end.jpg" /></SwiperSlide>
		<SwiperSlide><img src="/images/noosphera_end.jpg" /></SwiperSlide>
		<SwiperSlide><img src="/images/tea_end.jpg" /></SwiperSlide>
		<SwiperSlide><img src="/images/tractorcat_end.jpg" /></SwiperSlide>
	</Swiper>
</div>

<style>
	.swiper {
		width: 600px;
		height: 300px;
	}
</style>
