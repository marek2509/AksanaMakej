const listArray = document.querySelectorAll(".HeaderList");
const listArraySmall = document.querySelectorAll(".smallList");

const addClassActive = (elem) => {
	for (let i = 0; i < listArray.length; i++) {
		const smallList = listArray[i].querySelector(".smallList");
		const chevron = listArray[i].querySelector(".ti");

		if (listArray[i] == elem) {
			smallList.classList.toggle("active");
			chevron.classList.toggle("rotate");
		} else {
			smallList.classList.remove("active");
			chevron.classList.remove("rotate");
		}

		if (smallList.classList.contains("active")) {
			smallList.style.height = smallList.scrollHeight + "px";
		} else {
			smallList.style.height = 0;
		}
	}
};

listArray.forEach((x) => x.addEventListener("click", () => addClassActive(x)));
