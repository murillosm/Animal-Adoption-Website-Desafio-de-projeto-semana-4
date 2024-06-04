document.addEventListener("DOMContentLoaded", function () {
   adoptModal();
   redirectToAdoptablesPage();
   donateModal();
});

function adoptModal() {
    const adoptButtons = document.querySelectorAll(".adoptButton");
    const cancelar = document.querySelector(".cancelar");
    const adoptModal = document.querySelector("#adopt-modal");
    const donateModal = document.querySelector("#donate-modal");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
        if (donateModal.classList.contains("show")) {
            donateModal.classList.remove("show");
            donateModal.classList.add("hide");
        }
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

function donateModal() {
   const donateButtons = document.querySelectorAll(".donate-button");
   const cancelarDonate = document.querySelector("#cancelarDonate");
   const donateModal = document.querySelector("#donate-modal");
   const adoptModal = document.querySelector("#adopt-modal");
   const fade = document.querySelector("#fade2");

   const toggleModal = () => {
      if (adoptModal.classList.contains("show")) {
            adoptModal.classList.remove("show");
            adoptModal.classList.add("hide");
        }
      donateModal.classList.toggle("show");
      donateModal.classList.toggle("hide");
      fade.classList.toggle("hide");
   };

   donateButtons.forEach(element => {
      element.addEventListener('click', toggleModal);
   });

   cancelarDonate.addEventListener('click', toggleModal);
   fade.addEventListener('click', toggleModal);
}