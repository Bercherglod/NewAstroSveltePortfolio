<script>
	import { onMount } from 'svelte'
	//	import resize from 'svelte-actions-resize'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { fade } from 'svelte/transition'
	let frame,
		frameWidth,
		parentFrame,
		parentFrameWidth,
		parentFrameHeight,
		frameSetHeight,
		timeoutScale,
		scrollIcon,
		divBlur,
		scaleFrame,
		ifrm
	let frameSetWidth = 1200
	let visible = true
	let frameSrc = ''
	export let frameLoad = false
	$: parentFrameWidth && clearTimeout(timeoutScale)
	$: parentFrameWidth && timerToScale()
	/*	
	const scaleFrame = tweened(0, {
		duration: 400,
		easing: cubicOut
	})
*/
	onMount(() => {
		ifrm = document.createElement('iframe')
		toScaleFrame()
		prepareFrame()
	})

	function toScaleFrame() {
		let scF = parentFrameWidth / frameWidth
		if (parentFrameWidth >= 1800) {
			frameSetWidth = 1800
			scF = 1
		} else if (parentFrameWidth >= 1500) {
			frameSetWidth = 1500
			scF = 1
		} else if (parentFrameWidth >= 1200) {
			frameSetWidth = 1200
			scF = 1
		} else {
			frameSetWidth = 1200
		}
		frameSetHeight = (frameSetWidth * parentFrameHeight) / parentFrameWidth
		scaleFrame = scF
	}

	function timerToScale() {
		timeoutScale = setTimeout(() => {
			toScaleFrame()
		}, 200)
	}

	function handleMouseover() {
		scrollIcon.classList.remove('hidden')
	}
	function handleMouseout() {
		scrollIcon.classList.add('hidden')
	}

	function prepareFrame() {
		ifrm.src = '/tractorcat/'
		document.body.appendChild(ifrm)
		ifrm.addEventListener('load', () => {
			document.body.removeChild(ifrm)
			frameSrc = '/tractorcat/'
			frameLoad = true
		})
	}
</script>

<div class="w-[100vw]">
	<div
		bind:this={parentFrame}
		bind:clientWidth={parentFrameWidth}
		bind:clientHeight={parentFrameHeight}
		class="parentFrame w-full  h-[40vh] xm:h-[60vh] xm:w-[600px] sm:w-[900px] lg:w-[1200px] xl:w-[1500px] xl2:w-[1800px] m-auto border-orange-200 border-solid border-t-2 border-b-2  xm:border-none">
		<div
			bind:this={scrollIcon}
			class="scroll-icon absolute top-[50%] left-[50%] ml-[-6px] mt-[-43px] hidden">
			<span>Scroll</span>
			<div class="mouse-icon">
				<div class="mouse-icon_wheel" />
			</div>
		</div>

		<iframe
			bind:this={frame}
			bind:clientWidth={frameWidth}
			on:mouseover={handleMouseover}
			on:mouseout={handleMouseout}
			on:focus={handleMouseover}
			on:blur={handleMouseout}
			src={frameSrc}
			width={frameSetWidth}
			height={frameSetHeight}
			loading="eager"
			allow="fullscreen"
			title="tractorcat"
			class="absolute xm:rounded-3xl xm:shadow-2xl xm:border-solid xm:border-[4px]"
			style="transform: scale({scaleFrame}); transform-origin: 0px 0px;" />
	</div>
</div>

<style>
	iframe {
		border-color: #92c6db;
	}

	.scroll-icon {
		z-index: 1;
		text-align: center;
		text-transform: uppercase;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
			sans-serif;
		font-size: 13px;
		line-height: 17px;
		color: white;
		background-color: transparent;
	}

	.mouse-icon {
		width: 30px;
		height: 55px;
		margin: 5px auto 0;
		border: 2px solid white;
		border-radius: 80px;
	}

	.mouse-icon_wheel {
		width: 8px;
		height: 12px;
		margin: 8px auto 0;
		background-color: white;
		border-radius: 8px;
		animation: scroller 1s ease-out infinite;
	}

	@keyframes scroller {
		0% {
			opacity: 0;
			transform: translateY(0);
		}
		10% {
			opacity: 0.8;
		}

		100% {
			opacity: 0;
			transform: translateY(25px);
		}
	}
</style>
