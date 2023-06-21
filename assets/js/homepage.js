let articles = document.querySelectorAll("article")

let spans = document.getElementById("span").querySelectorAll("span")
let figures = document.getElementById("figure").querySelectorAll("figure")

console.log(figures)

for (let i = 0; i < spans.length; i++) {
	spans[i].addEventListener('click', () => {
		for (let j = 0; j < spans.length; j++) {
			if (spans[j].classList.contains("span-active")) spans[j].classList.remove("span-active")
			if (figures[j].classList.contains("opacity-1")) figures[j].classList.remove("opacity-1")
		}
		
		if (!figures[i].classList.contains("opacity-1")) figures[i].classList.add("opacity-1")
		if (!spans[i].classList.contains("span-active")) spans[i].classList.add("span-active")
	})
}

for (let article of articles) {
	let diff = parseInt(article.getAttribute("data-lvl"))
	let span = article.children[0]
	
	for (let i = 0; i < diff; i++) {
		span.children[i].classList.add("red")
	}
}