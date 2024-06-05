document.addEventListener("DOMContentLoaded", function () {
   adoptModal();
   redirectToAdoptablesPage();
   donateModal();
   carrosel();
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


function carrosel() {
   const carroselSelect = document.querySelector("#carrosel-select");
   const carrosel = document.querySelector(".carrosel");
   const arrowBtns = document.querySelectorAll("#carrosel-select i");
   const firstCardWidth = carrosel.querySelector(".card").offsetWidth;
   const carouselChildren = [...carrosel.children]

   let isDragging = false, startX, startScrollLeft, timeoutId;

   let cardPerVIew = Math.round(carrosel.offsetWidth / firstCardWidth);

   carouselChildren.slice(-cardPerVIew).reverse().forEach(card => {
      carrosel.insertAdjacentHTML("afterbegin", card.outerHTML)
   });

   carouselChildren.slice(0, cardPerVIew).forEach(card => {
      carrosel.insertAdjacentHTML("beforeend", card.outerHTML)
   });


   arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
         carrosel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
   });

   const dragStart = (e) => {
      isDragging = true;
      carrosel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carrosel.scrollLeft;
   };

   const dragging = (e) => {
      if (!isDragging) return;
      carrosel.scrollLeft = startScrollLeft - (e.pageX - startX);
   };

   const dragStop = () => {
      isDragging = false;
      carrosel.classList.remove("dragging");
   };

   const autoPlay = () => {
       if (window.innerWidth < 768) return;
       timeoutId = setInterval(() => carrosel.scrollLeft += firstCardWidth, 2500);
   }

   autoPlay();

   const infiniteScroll = () => {
      if (carrosel.scrollLeft === 0) {
         carrosel.classList.add("no-trans");
         carrosel.scrollLeft = carrosel.scrollWidth - (2 * carrosel.offsetWidth);
         carrosel.classList.remove("no-transition");
      } else if (Math.ceil(carrosel.scrollLeft) === carrosel.scrollWidth - carrosel.offsetWidth) {
         carrosel.classList.add("no-trans");
         carrosel.scrollLeft = carrosel.offsetWidth;
         carrosel.classList.remove("no-transition");
      }

      clearTimeout(timeoutId);
      if (!carroselSelect.matches(":hover")) autoPlay();
   }

   carrosel.addEventListener("mousedown", dragStart);
   carrosel.addEventListener("mousemove", dragging);
   document.addEventListener("mouseup", dragStop);
   carrosel.addEventListener("scroll", infiniteScroll);
   carroselSelect.addEventListener("mouseenter", () => clearTimeout(timeoutId));
   carroselSelect.addEventListener("mouseleave", autoPlay);
}



