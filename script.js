const gallery = document.querySelectorAll(".showcase");

function onClick(e) {
    e.target.classList.toggle("open")
}

gallery.forEach((showcase) => {
  showcase.addEventListener("click", onClick);
});
