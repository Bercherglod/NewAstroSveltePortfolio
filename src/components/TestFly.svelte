<script>
import { fly } from 'svelte/transition'
import { onMount } from 'svelte'

let cx=0, cy=0, cdel=100, cdura=500, cimg='1', sumTime=1000

let arrAnimPos = [
    [200, 200, 0, 1200, '2'],
    [300, 300, 300, 1500, '1'],
    [100, 100, 400, 1200, '1'],
    [400, 200, 0, 1200, '2']
]

function cursorPosition () {
arrAnimPos.forEach((el,i) => {
    setTimeout(() => {
    cx=el[0]
    cy=el[1]
    cdel=el[2]
    cdura=el[3]
    cimg=el[4]
    sumTime+=cdura 
}, sumTime*i) 
})
}
onMount(() => {
    
})
</script>
<h1 class="text-base">{cx}, {cy}, {cdel}, {cdura}, {cimg}, {sumTime}</h1>
<div
			class="w-[20px] h-[20px] bg-amber-400 relative"
            style="">
			{cimg}
		</div>
<style>
div {
    left:0;
    top:0;
    background-image: url(/cursor.svg);
    animation: change-background 5s ease infinite;
}
@keyframes change-background {
  0% {
    left:0;
    top:0;
  }
  20% {
    left:100px;
    top:0;
  }
  20% {
    background-image: url(/pointer.svg);
  }
  25% {
  }
  25% {
    background-image: url(/cursor.svg);
  }
  50% {
    left:50px;
    top:100px;
  }
  60% {
  }
  80% {
    left:0;
    top:0;
  }
  80%, 100% {
    
  }
  
}
</style>