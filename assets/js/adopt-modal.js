document.addEventListener("DOMContentLoaded",[ birthdateSelect()]);

// Função para preencher os selects de data de nascimento
function birthdateSelect() {
   let daySelect = document.getElementById('day');
   for (let i = 1; i <= 31; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i;
      daySelect.appendChild(option);
   }

   let monthSelect = document.getElementById('month');
   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   for (let i = 0; i < months.length; i++) {
      let option = document.createElement('option');
      option.value = i + 1; // Mês começa em 1
      option.text = months[i];
      monthSelect.appendChild(option);
   }

   let yearSelect = document.getElementById('year');
   let currentYear = new Date().getFullYear();
   for (let i = currentYear; i >= 1900; i--) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i;
      yearSelect.appendChild(option);
   }
}
// Função para abrir e fechar o modal de adoção
// function adoptModal() {
//    const openModal = document.querySelector("#openModal");
//    const cancelar = document.querySelector(".cancelar");
//    const adoptModal = document.querySelector("#adopt-modal");
//    const fade = document.querySelector("#fade");

//    const toggleModal = () => {
//       adoptModal.classList.toggle("show");
//       adoptModal.classList.toggle("hide");
//       fade.classList.toggle("hide");
//    }

//    [openModal, cancelar, fade].forEach(element => {
//       element.addEventListener('click', () => toggleModal());
//    });
// };


// Validar os campos antes de enviar o formulário
function validateForm() {
   const email = document.getElementById("email").value;
   const fullName = document.getElementById("full-name").value;
   const day = document.getElementById("day").value;
   const month = document.getElementById("month").value;
   const year = document.getElementById("year").value;
   const terms = document.getElementById("terms").checked;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (email === "") {
      document.getElementById("emailError").innerText = "Please enter your email.";
      return false;
   } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Please enter a valid email address.";
      return false;
   } else {
      document.getElementById("emailError").innerText = "";
   }

   if (fullName === "") {
      document.getElementById("fullNameError").innerText = "Please enter your full name.";
      return false;
   } else {
      document.getElementById("fullNameError").innerText = "";

      if (day === "" || month === "" || year === "") {
         document.getElementById("dobError").innerText = "Please select your date of birth.";
         return false;
      } else {
         document.getElementById("dobError").innerText = "";
      }

      if (!terms) {
         document.getElementById("termsError").innerText = "Please agree to the terms and conditions.";
         return false;
      } else {
         document.getElementById("termsError").innerText = "";
      }

      return true;
   }
}

// Evento de envio do formulário
document.getElementById("buttonAdont").addEventListener("click", function (event) {
   if (!validateForm()) {
      event.preventDefault();
   }
});


//caso o formulário seja válido, redirecionar para a página de sucesso
document.getElementById("buttonAdont").addEventListener("click", function (event) {
   event.preventDefault();

   if (validateForm()) {
      window.location.href = "./html/success_page.html";
   }
});