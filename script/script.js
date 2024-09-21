// Seleciona o modal e o botão de fechar
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Função para mostrar o modal após 3 segundos
setTimeout(function() {
  modal.style.display = "block";
}, 2000);

// Função para fechar o modal ao clicar no "x"
span.onclick = function() {
  modal.style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

