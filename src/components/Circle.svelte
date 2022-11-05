<script>
	export let startsCircle
	$: startsCircle && loadCircle()
	let percents = 0,
		timerPersent,
		cotnainer

	function loadCircle() {
		timerPersent = setInterval(persent, 25)
	}
	function persent() {
		//cotnainer.classList.remove('hidden')
		percents += 1
		if (percents == 100) {
			clearInterval(timerPersent)
		}
	}
</script>

<div
	class="w-[70px] h-[70px] rounded-full bg-slate-700/[0.2] mx-auto my-auto  flex justify-center items-center">
	<div
		bind:this={cotnainer}
		id="container"
		class="{startsCircle ? '' : 'hidden'} mx-auto">
		<div id="percents" class="relative  z-10 ">
			<div class="text-lime-500 font-sans font-medium">{percents}</div>
		</div>
		<div id="circle-loader-wrap">
			<div class="left-wrap">
				<div class="loader" />
			</div>

			<div class="right-wrap">
				<div class="loader" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	$base-width: 90px;
	$top-width: 76px;
	$left-top: calc(($base-width - $top-width) / 2);
	$time: 5s;
	$sizes: (
		'xs': 360px,
		'xm': 640px,
		'sm': 1000px,
		'lg': 1280px,
		'xl': 1600px
	);
	@mixin media($minmax, $media) {
		@each $size, $resolution in $sizes {
			@if $media == $size {
				@media only screen and (#{$minmax}-width: $resolution) {
					@content;
				}
			}
		}
	}

	#container {
		width: $base-width;
		height: $base-width;
		@include media('max', 'xm') {
			width: calc($base-width/1.5);
			height: calc($base-width/1.5);
		}
		#percents {
			width: $base-width;
			height: $base-width;
			@include media('max', 'xm') {
				width: calc($base-width/1.5);
				height: calc($base-width/1.5);
			}
			div {
				margin: 0;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-right: -50%;
				transform: translate(-50%, -50%);
			}
		}
		#circle-loader-wrap {
			overflow: hidden;
			position: relative;
			width: $base-width;
			height: $base-width;
			top: -$base-width;
			@include media('max', 'xm') {
				width: calc($base-width/1.5);
				height: calc($base-width/1.5);
				top: calc(-#{$base-width} / 1.5);
			}

			box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1) inset;
			background-color: #ffffff34;
			border-radius: $base-width;

			transform: rotate(180deg);
			&:after {
				content: '';
				position: absolute;
				left: $left-top;
				top: $left-top;
				width: $top-width;
				height: $top-width;
				@include media('max', 'xm') {
					left: calc($left-top/1.5);
					top: calc($left-top/1.5);
					width: calc($top-width/1.5);
					height: calc($top-width/1.5);
				}
				border-radius: 50%;
				background-color: #ffffff;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			}

			div {
				overflow: hidden;
				position: absolute;
				width: 50%;
				height: 100%;
			}
			.loader {
				position: absolute;
				left: 100%;
				top: 0;
				width: 100%;
				height: 100%;
				border-radius: 1000px;
				background-color: #00f028;
			}

			.left-wrap {
				left: 0;

				.loader {
					border-top-left-radius: 0;
					border-bottom-left-radius: 0;
					transform-origin: 0 50% 0;
					animation: loading-left $time 1 linear;
					animation-fill-mode: forwards;
				}
			}
			.right-wrap {
				left: 50%;
				.loader {
					left: -100%;
					border-bottom-right-radius: 0;
					border-top-right-radius: 0;
					transform-origin: 100% 50% 0;
					animation: loading-right $time 1 linear;
					animation-fill-mode: forwards;
				}
				// CSS3 Circle Loader Stuff right HERE!!!

				@keyframes loading-left {
					0% {
						transform: rotate(0deg);
					}
					25% {
						transform: rotate(180deg);
					}
					50% {
						transform: rotate(180deg);
					}
					75% {
						transform: rotate(180deg);
					}
					100% {
						transform: rotate(180deg);
					}
				}

				@keyframes loading-right {
					0% {
						transform: rotate(0deg);
					}
					25% {
						transform: rotate(0deg);
					}
					50% {
						transform: rotate(180deg);
					}
					75% {
						transform: rotate(180deg);
					}
					100% {
						transform: rotate(180deg);
					}
				}
			}
		}
	}
</style>
