const showcases = document.querySelectorAll(".showcase");

function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

showcases.forEach((showcase) => showcase.addEventListener("click", toggleOpen));
showcases.forEach((showcase) =>
  showcase.addEventListener("transitionend", toggleActive)
);
