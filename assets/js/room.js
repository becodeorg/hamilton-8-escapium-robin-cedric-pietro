let param = (new URLSearchParams(window.location.search)).get('key')
let fig = document.getElementById("figure")
let images = fig.querySelectorAll("figure")

let sectionContainers = document.getElementById("rooms-containers")
let xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = Action
xhttp.open("GET", "/assets/resources/rooms.json")
xhttp.send()

function Action() {
	if (this.readyState == 4 && this.status == 200) {
		let values = JSON.parse(this.response)
		
		fig.setAttribute("data-title", values[param].name)
	}
}