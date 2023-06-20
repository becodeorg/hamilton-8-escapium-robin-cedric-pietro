let articles = document.querySelectorAll("article")

for (let article of articles) {
	let diff = parseInt(article.getAttribute("data-lvl"))
	let span = article.children[0]
	
	for (let i = 0; i < diff; i++) {
		console.log(span.children[i])
		span.children[i].classList.add("red")
	}
}