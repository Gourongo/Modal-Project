const openBtn = document.querySelector(".open-Btn");
const modal = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-Btn");

openBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
}) 

closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal")
})