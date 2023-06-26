let sectionContainers = document.getElementById("rooms-containers")
let xhttp = new XMLHttpRequest()
const filter = (new URLSearchParams(window.location.search)).get('key')

let all = document.getElementById("all")
let easy = document.getElementById("easy")
let normal = document.getElementById("normal")
let hard = document.getElementById("hard")
xhttp.onreadystatechange = Action
xhttp.open("GET", "/hamilton-8-escapium-robin-cedric-pietro/assets/resources/rooms.json")
xhttp.send()

function Action() {
	if (this.readyState == 4 && this.status == 200) {
		let values = JSON.parse(this.response)
		let index = 0
		
		values.forEach(element => {
			if (filter == "easy") {
				if (!easy.classList.contains("filter-active")) {
					easy.classList.add("filter-active")
				}
				
				disableActiveClass(all)
				disableActiveClass(normal)
				disableActiveClass(hard)
				
				if (element.difficulty >= 0 && element.difficulty <= 2) {
					createAndAddNewRooms(index, element)
				}
			} else if (filter == "normal") {
				if (!normal.classList.contains("filter-active")) {
					normal.classList.add("filter-active")
				}
				
				disableActiveClass(all)
				disableActiveClass(easy)
				disableActiveClass(hard)
				
				if (element.difficulty === 2) {
					createAndAddNewRooms(index, element)
				}
			} else if (filter == "hard") {
				if (!hard.classList.contains("filter-active")) {
					hard.classList.add("filter-active")
				}
				
				disableActiveClass(all)
				disableActiveClass(easy)
				disableActiveClass(normal)
				
				if (element.difficulty >= 3 && element.difficulty <= 4) {
					createAndAddNewRooms(index, element)
				}
			} else {
				if (!all.classList.contains("filter-active")) {
					all.classList.add("filter-active")
				}
				
				disableActiveClass(easy)
				disableActiveClass(normal)
				disableActiveClass(hard)
				
				createAndAddNewRooms(index, element)
			}
		})
	}
}

function disableActiveClass(element) {
	if (element.classList.contains("filter-active")) {
		element.classList.remove("filter-active")
	}
}

function createAndAddNewRooms(index, element) {
	// create element section container
	let section = document.createElement("a")
	section.setAttribute("href", "/hamilton-8-escapium-robin-cedric-pietro/src/room.html?key=" + element.name)
	
	// create element figure container of image
	let figure = document.createElement("figure")
	
	// create element image
	let img = document.createElement("img")
	// set attribute src of image
	img.setAttribute("src", "/assets" + element.photos[0])
	// set attribute alt
	img.setAttribute("alt", "picture")
	
	// add img in figure element
	figure.append(img)
	
	// create element article container of text part
	let article = document.createElement("article")
	
	// creat element ul container of lock
	let ul = document.createElement("ul")
	
	// loop to create 5 of the lock icon
	for (let j = 0; j < 5; j++) {
		// create element li for ul child
		let li = document.createElement("li")
	
		// create element i for icon
		let i = document.createElement("i")
		// set first class {fontawesome}
		i.classList.add("fa-solid")
		// set second class {fontawesome}
		i.classList.add("fa-lock")
	
		// loop to set difficulty color
		if (j <= element.difficulty) {
			// paint it red
			i.style.color = "#f60b0e"
		}
		// set i in li element
		li.append(i)
		// set li in ul element
		ul.append(li)
	}
	
	// create h2 element {name of room}
	let h2 = document.createElement("h2")
	// set content
	h2.textContent = element.name
	
	// create element div container of sub element {
	//	number of player,
	//	times,
	//  location
	// }
	let div = document.createElement("div")
	
	// loop 3 times
	for (let x = 0; x < 3; x++) {
	
		// create p element container of contect and icon
		let p = document.createElement("p")
	
		// create i element for icon
		let i = document.createElement("i")
		// set first class {fontawesome}
		i.classList.add("fa-solid")
	
		// check what number is
		switch (x) {
			case 0:
				i.classList.add("fa-users")
				p.textContent = element.players[0] + "-" + element.players[1]
				break
			case 1:
				i.classList.add("fa-clock")
				p.textContent = element.minutes
				break
			case 2:
				i.classList.add("fa-location-dot")
				p.textContent = element.location
				break
			default:
				break
		}
		// set i in p element
		p.append(i)
		// set p in div element
		div.append(p)
	}
	
	article.append(ul)
	article.append(h2)
	article.append(div)
	section.append(figure)
	section.append(article)
	sectionContainers.append(section)
	index++
}