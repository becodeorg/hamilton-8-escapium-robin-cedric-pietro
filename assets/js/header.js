let burgerBtn = document.getElementById("burger")
let body = document.body
let menu = document.getElementById("menu")
let lis = menu.children[0].children
let active = header.getAttribute("data-value")

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