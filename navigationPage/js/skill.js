function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  window.addEventListener("load", function () {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.transition = "opacity 0.5s";
    loaderWrapper.style.opacity = "0";
    setTimeout(() => loaderWrapper.style.display = "none", 500);
  });