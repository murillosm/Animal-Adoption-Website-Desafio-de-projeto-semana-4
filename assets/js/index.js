document.addEventListener("DOMContentLoaded", function () {
   adoptModal();
   redirectToAdoptablesPage();
});

function adoptModal() {
    const adoptButtons = document.querySelectorAll(".adoptButton");
    const cancelar = document.querySelector(".cancelar");
    const adoptModal = document.querySelector("#adopt-modal");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
        adoptModal.classList.toggle("show");
        adoptModal.classList.toggle("hide");
        fade.classList.toggle("hide");
    };

    adoptButtons.forEach(element => {
       element.addEventListener('click', toggleModal);
    });

    cancelar.addEventListener('click', toggleModal);
    fade.addEventListener('click', toggleModal);
}



function redirectToAdoptablesPage() {
   var buttons = document.querySelectorAll(".btn-view-adoptables");

   buttons.forEach(function (button) {
      button.addEventListener("click", function () {
         window.location.href = "./html/adoptables_page.html";
      });
   });
}


