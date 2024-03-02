const card = document.getElementById("card");
card.addEventListener("click", (evento) => {
	console.log("Diste click en: " + evento.target.innerText);
});

minus.addEventListener("click", () => {
	plus.classList.toggle("card__block-plus");
});
minus[2].addEventListener("click", () => {
	console.log(minus[2]);
});
minus[3].addEventListener("click", () => {
	console.log(minus[3]);
});
