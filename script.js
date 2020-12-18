const commentBtn = document.getElementById("user-nav__comments");
const comments = document.querySelector(".user-nav__comments");

commentBtn.addEventListener("click", () => {
  comments.classList.toggle("active");
});
