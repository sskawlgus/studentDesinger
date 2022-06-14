const headerTag = document.querySelector("header");

document.addEventListener("scroll", function(){

	const pixels = window.scrollY;

	if(pixels > headerTag.getBoundingClientRect().height){
		headerTag.classList.add("scrolled");
	}else{
		headerTag.classList.remove("scrolled")
	}
})

const h3Tag = document.querySelector("h3");

const animatedTags = document.querySelectorAll("h1, h2, h3, h4, p, section img, a.button")

animatedTags.forEach(tag =>{
	tag.style.opacity = "0";
})

document.addEventListener("scroll",function(){

	let delay = 0.25;

animatedTags.forEach(tag =>{

	const tagTop = tag.getBoundingClientRect().top;
	const tagBottom = tag.getBoundingClientRect().bottom;
	if (tagTop < window.innerHeight && tagBottom > 0){
		tag.style.animation = `fadeIn 1s ${delay}s both`;
		console.log("appear");
		delay +=0.15;
	}else{
		tag.style.animation = "0";
		console.log("hide");
	}

})

})

