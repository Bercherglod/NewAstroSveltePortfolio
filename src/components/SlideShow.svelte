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

<div class="w-[100vw]  sm:h-[auto] sm:w-[90vw] xl2:w-[1600px] overflow-hidden">
	<Swiper
		modules={[Navigation, Pagination, A11y]}
		spaceBetween={0}
		slidesPerView={1}
		navigation
		pagination={{ clickable: true, dynamicBullets: true }}
		on:slideChange={() => console.log('slide change')}
		on:swiper={(e) => console.log(e.detail[0])}
		class="sm:rounded-3xl h-[58vh] w-[140vw] sm:h-[auto] sm:w-full">
		<SwiperSlide
			><div class="slide-text btn ">
				<h1>Ремонт спецтехники</h1>
				<ul>
					<li>Максимальная производительность</li>
					<li>Сжатие шрифтов</li>
					<li>Технология Lazy loading для изображений</li>
					<li>Адаптивность с расчетом на изменения наполнения</li>
					<li>Криптографический протокол SSL</li>
					<li>Оптимизирован под поисковые системы</li>
					<li>Способность к расширению проекта</li>
					<li>
						<a href="https://tractorcat.ru" class="text-blue-400">Tractorcat</a>
					</li>
				</ul>
			</div>
			<img src="/images/tractorcat_end.jpg" /></SwiperSlide>
		<SwiperSlide>
			<div class="slide-text btn">
				<h1>Для экологической компании</h1>
				<p>
					Использовал два фона для parallax-эффекта: скрин из google earth с активной
					3d визуализацией и повторяющийся SVG-ормамент. Пока тяжеловесный скрин
					загружается в фоновом режиме, на его месте отображается размытая миниатюра
					и SVG.
				</p>
				<a href="https://noosphera.art/" class="xl:pl-[10%] sm:pl-[7%]">Ноосфера</a>
			</div>
			<img src="/images/noosphera_end.jpg" />
		</SwiperSlide>
		<SwiperSlide>
			<div class="slide-text btn">
				<h1>Портфолио для ретушера</h1>
				<ul>
					<li>Responsive images</li>
					<li>Отложенная загрузка фотографий</li>
					<li>Кроссбраузерное до/после</li>
				</ul>
				<a href="https://boretouch.eyeglobe.ru" class="xl:pl-[10%] sm:pl-[7%]"
					>Boretouch</a>
			</div>
			<img src="/images/boretouch_end.jpg" /></SwiperSlide>
		<SwiperSlide>
			<div class="slide-text btn">
				<h1>Для фотографа</h1>
			</div>
			<img src="/images/isk_end.jpg" /></SwiperSlide>
		<SwiperSlide>
			<div class="slide-text btn">
				<h1>Сервис доставки чая</h1>
				<p>
					WordPress WooCommerce. Из интересного - мгновенная фильтрация товаров на
					стороне клиента
				</p>
				<a href="http://gettea.eyeglobe.ru/" class="xl:pl-[10%] sm:pl-[7%]"
					>Gettea</a>
			</div>
			<img src="/images/tea_end.jpg" /></SwiperSlide>
		<SwiperSlide>
			<div class="slide-text btn">
				<h1>Для продаж оборудования</h1>
				<p>
					Нестандартное кроссбраузерное меню адаптированное под разные разрешения и
					размеры экрана
				</p>
				<a href="http://deft.ru/" class="xl:pl-[10%] sm:pl-[7%]">Deft</a>
			</div>
			<img src="/images/deft_end.jpg" /></SwiperSlide>
	</Swiper>
</div>
