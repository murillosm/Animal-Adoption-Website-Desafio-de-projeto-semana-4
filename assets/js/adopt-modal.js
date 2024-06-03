document.addEventListener("DOMContentLoaded",[adoptModal(), birthdateSelect()]);

// Função para preencher os selects de data de nascimento
function birthdateSelect() {
   // Preencher dias
   let daySelect = document.getElementById('day');
   for (let i = 1; i <= 31; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i;
      daySelect.appendChild(option);
   }

   // Preencher meses
   let monthSelect = document.getElementById('month');
   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   for (let i = 0; i < months.length; i++) {
      let option = document.createElement('option');
      option.value = i + 1; // Mês começa em 1
      option.text = months[i];
      monthSelect.appendChild(option);
   }

   // Preencher anos
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
function adoptModal() {
   const openModal = document.querySelector("#openModal");
   const cancelar = document.querySelector(".cancelar");
   const adoptModal = document.querySelector("#adopt-modal");
   const fade = document.querySelector("#fade");

   const toggleModal = () => {
      adoptModal.classList.toggle("show");
      adoptModal.classList.toggle("hide");
      fade.classList.toggle("hide");
   }

   [openModal, cancelar, fade].forEach(element => {
      element.addEventListener('click', () => toggleModal());
   });
};


