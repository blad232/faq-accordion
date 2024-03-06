'use strict';
//Selecting elements by classes.
const card__img = document.getElementsByClassName("card__img");
const paragragh = document.getElementsByClassName("card__block-details");
const card__headingBlock = document.getElementsByClassName("card__heading-block");


//adding events 
for (let i = 0; i < card__img.length; i++) {
	card__img[i].addEventListener("click", () => {
		paragragh[i].classList.toggle("--active");
		card__headingBlock[i].classList.toggle("--border");

		if (paragragh[i].classList == "card__block-details --active") {
			card__img[i].src = "./assets/images/icon-minus.svg";
			card__headingBlock[3].classList.add("--border");
		} else {
			card__img[i].src = "./assets/images/icon-plus.svg";
			card__headingBlock[3].classList.add("--border");
		}


	});
}

