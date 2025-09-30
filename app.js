const button = document.getElementById("button");
const inputText = document.getElementById("input-text");
const inputPassword = document.getElementById("input-password");
const inputCheck = document.getElementById("input-check");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const textValue = inputText.value.trim();
  const passwordValue = inputPassword.value.trim();
  const checkValue = inputCheck.checked;

  if (!textValue || !passwordValue || !checkValue) {
    alert("Por favor, rellene todos los campos y marque el check.");
    return;
  }

  alert(
    "Texto: " +
      textValue +
      "\nContraseña: " +
      passwordValue +
      "\nCheck: " +
      (checkValue ? "Marcado" : "No marcado")
  );
});
