const section = document.querySelector('section');

let currentPos = window.pageYOffset;

const update = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	const speed = diff * 0.35;
	
	section.style.transform = `skewY(${ speed }deg)`;
	
	currentPos = newPos;
	
	requestAnimationFrame(update);
}

update();
window.addEventListener("load", function () {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.transition = "opacity 0.5s";
    loaderWrapper.style.opacity = "0";
    setTimeout(() => loaderWrapper.style.display = "none", 500);
  });