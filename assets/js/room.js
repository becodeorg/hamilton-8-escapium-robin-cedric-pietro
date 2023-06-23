let param = (new URLSearchParams(window.location.search)).get('key')
let fig = document.getElementById("figure")
let images = fig.querySelectorAll("figure")
let dataSection = document.getElementById("data")

/*
let calendar = document.getElementById("calendar")
let thead = document.getElementById("thead")
let tbody = calendar.querySelector("tbody")
let trs = [
	tbody.children[1],
	tbody.children[2],
	tbody.children[3],
	tbody.children[4],
	tbody.children[5],
	tbody.children[6]
]

let date = new Date()
let arr = setCalendar(trs)

let before = document.getElementById("before")
let after = document.getElementById("after")
*/
let sectionContainers = document.getElementById("rooms-containers")
let xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = Action
xhttp.open("GET", "/assets/resources/rooms.json")
xhttp.send()

/**
 *
 * Create a dynamic calendar
 * @param {firstDay} default value 26 start of the calendar page
 *//*
function setCalendar(trs, firstDay = 26, month = 9, year = 2022) {
	let arrForTitle = dayInMonthAndGetMonth(month + 1, year)
	thead.textContent = arrForTitle[1] + " " + year
	let d = firstDay, m = month, y = year
	for (let i = 0; i < trs.length; i++) {
		
		for (let td of trs[i].children) {
			if (firstDay == arrForTitle[0] + 1) {
				firstDay = 1
				if (month != 12) {
					month++
				} else {
					month = 1
					year++
				}
			}
			td.textContent = firstDay
			firstDay++
		}
	}
	return [d, m, y]
}

/*
before.addEventListener('click', () => {
	arr = setCalendar(arr[0], (arr[1] - 1), arr[2])
})

after.addEventListener('click', () => {
	arr = setCalendar(arr[0], (arr[1] + 1), arr[2])
})
*/

/**
 *
 * Return the amount of day in the month given
 * @param {month} integer of the number of the month
 * @param {year} integer of the year
 *
 * @return {integer}
 *//*
function dayInMonthAndGetMonth(month, year) {
	let d
	switch (month) {
		case 1:
			return [31, "January"]
			break
		case 2:
			if (year % 4 == 0 && year % 400 == 0) d = 29
			else d = 28
			return [d, "February"]
			break
		case 3:
			return [31, "March"]
			break
		case 4:
			return [30, "April"]
			break
		case 5:
			return [31, "May"]
			break
		case 6:
			return [30, "June"]
			break
		case 7:
			return [31, "July"]
			break
		case 8:
			return [31, "August"]
			break
		case 9:
			return [30, "September"]
			break
		case 10:
			return [31, "October"]
			break
		case 11:
			return [30, "November"]
			break
		case 12:
			return [31, "December"]
			break
		default:
			return undefined
			break
	}
}
*/
function Action() {
	if (this.readyState == 4 && this.status == 200) {
		let values = JSON.parse(this.response)
		let iOne = document.createElement("i")
		let iTwo = document.createElement("i")
		let data
		
		let locks = document.getElementById("lock")
		for (let value of values) {
			if (value.name == param) {
				data = value
			}
		}
		
		for (let i = 0; i < data.difficulty; i++) {
			locks.children[i].children[0].classList.add("red")
		}
		
		fig.setAttribute("data-title", data.name)
		
		let lis = dataSection.querySelector("ul").querySelectorAll("li")
		let lis2 = dataSection.children[1].children[0].children
		let spanContainer = lis[0].querySelector("span")
		let spans = spanContainer.querySelectorAll("span")
		
		for (let i = 0; i < spans.length; i++) {
			if (i < data.difficulty) {
				spans[i].children[0].classList.add("red")
			} else {
				break
			}
		}
		
		let phone = document.createElement("i")
		let email = document.createElement("i")
		let skype = document.createElement("i")
		let locat = document.createElement("i")
		
		iOne.classList.add("fa-solid")
		iOne.classList.add("fa-users")
		lis[1].querySelector("p").textContent = data.players[0] + "-" + data.players[1]
		lis[1].querySelector("p").append(iOne)
		
		iTwo.classList.add("fa-solid")
		iTwo.classList.add("fa-clock")
		lis[2].querySelector("p").textContent = data.minutes
		lis[2].querySelector("p").append(iTwo)
		
		lis2[0].textContent = data.phone
		phone.classList.add("fa-solid")
		phone.classList.add("fa-phone-flip")
		lis2[0].append(phone)
		
		lis2[1].textContent = data.email
		email.classList.add("fa-solid")
		email.classList.add("fa-envelope")
		lis2[1].append(email)
		
		lis2[3].textContent = data.location
		locat.classList.add("fa-solid")
		locat.classList.add("fa-location-dot")
		lis2[3].append(locat)
		
		lis2[2].textContent = data.skype
		skype.classList.add("fa-brands")
		skype.classList.add("fa-skype")
		lis2[2].append(skype)
	}
}