function exibirforms() {
  document.getElementById("formulario").style.display = "flex";
}
function fecharforms() {
  document.getElementById("formulario").style.display = "none";
}

function enviarforms(event) {
  event.preventDefault();

  var nome = document.getElementsByName("nome")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var numero = document.getElementsByName("numero")[0].value;

  if (nome === "" || email === "" || numero === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Vaga garantida com sucesso!");

    fecharforms();
  }
}
