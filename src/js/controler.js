const btnDropdown = document.querySelector(".dropdown__btn")
const dropdownMenu = document.querySelector(".dropdown__menu")

btnDropdown.addEventListener("click", function () {
	dropdownMenu.classList.toggle("hidden")
})
