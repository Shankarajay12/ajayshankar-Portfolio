window.addEventListener("load", function () {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.transition = "opacity 0.5s";
    loaderWrapper.style.opacity = "0";
    setTimeout(() => loaderWrapper.style.display = "none", 500);
  });