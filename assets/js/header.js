let burgerBtn = document.getElementById("burger")
let body = document.body
let menu = document.getElementById("menu")
let lis = menu.children[0].children
let active = header.getAttribute("data-value")

let closeBtn = document.querySelector(".cross")
let searchBtn = document.getElementById("button-search")
let searchContainers = document.querySelector(".search-containers")

closeBtn.addEventListener('click', () => {
	searchContainers.classList.remove("left-0")
	body.classList.remove("overflow-hidden")
})

searchBtn.addEventListener('click', () => {
	if (searchContainers.classList.contains("left-0")) {
		searchContainers.classList.remove("left-0")
	} else {
		searchContainers.classList.add("left-0")
	}
	
	if (body.classList.contains("overflow-hidden")) {
		body.classList.remove("overflow-hidden")
	} else {
		body.classList.add("overflow-hidden")
	}
})

burgerBtn.addEventListener('click', () => {
	if (body.classList.contains("opacity-7")) {
		body.classList.remove("opacity-7")
	} else {
		body.classList.add("opacity-7")
	}
	
	if (menu.classList.contains("left-0")) {
		menu.classList.remove("left-0")
	} else {
		menu.classList.add("left-0")
	}
	
	if (burgerBtn.classList.contains("on-click")) {
		burgerBtn.classList.remove("on-click")
	} else {
		burgerBtn.classList.add("on-click")
	}
})


for (let i = 0; i < lis.length; i++) {
	
	if ((i + 1) === parseInt(active)) {
		lis[i].classList.add("active")
		break
	}
}