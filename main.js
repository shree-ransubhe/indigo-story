/**
 * Gallery + hero: show real images when files exist; keep styled placeholders otherwise.
 */
(function () {
  document.querySelectorAll(".visual-card").forEach(function (figure) {
    var img = figure.querySelector(".visual-card__img");
    if (!img) return;
    function loaded() {
      figure.classList.add("visual-card--loaded");
    }
    function failed() {
      figure.classList.add("visual-card--missing");
    }
    img.addEventListener("load", loaded);
    img.addEventListener("error", failed);
    if (img.complete && img.naturalHeight > 0) loaded();
  });

  var poster = document.querySelector(".hero__poster");
  var heroImg = document.querySelector(".hero__poster-img");
  if (poster && heroImg) {
    heroImg.addEventListener("load", function () {
      poster.classList.add("hero__poster--loaded");
    });
    heroImg.addEventListener("error", function () {
      poster.classList.add("hero__poster--missing");
    });
    if (heroImg.complete && heroImg.naturalHeight > 0) {
      poster.classList.add("hero__poster--loaded");
    }
  }
})();
