// Evento de envio do formulário
document.getElementById("confirmDonate").addEventListener("click", function (event) {
   if (!validateDonateForm()) {
      event.preventDefault();
   }
});


//caso o formulário seja válido, redirecionar para a página de sucesso
document.getElementById("confirmDonate").addEventListener("click", function (event) {
   event.preventDefault();

   if (validateDonateForm()) {
      window.location.href = "./html/success_page.html";
   }
});

function validateDonateForm() {
   const emailDonate = document.getElementById("emailDonate").value;
   const donateValue = document.getElementById("donateValue").value;
   const paymentMethods = document.getElementsByName("payment");

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (emailDonate === "") {
      document.getElementById("emailDonateError").innerText = "Por favor, insira seu email.";
      return false;
   } else if (!emailRegex.test(emailDonate)) {
      document.getElementById("emailDonateError").innerText = "Por favor, insira um endereço de email válido.";
      return false;
   } else {
      document.getElementById("emailDonateError").innerText = "";
   }

   if (donateValue === "") {
      document.getElementById("donateValueError").innerText = "Por favor, insira o valor da doação.";
      return false;
   } else {
      document.getElementById("donateValueError").innerText = "";
   }

   let paymentMethodSelected = false;
   for (let i = 0; i < paymentMethods.length; i++) {
      if (paymentMethods[i].checked) {
         paymentMethodSelected = true;
         break;
      }
   }

   if (!paymentMethodSelected) {
      document.getElementById("radiosError").innerText = "Por favor, selecione um método de pagamento.";
      return false;
   } else {
      document.getElementById("radiosError").innerText = "";
   }

   return true;
}
