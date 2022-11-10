game_login.js
Quem tem acesso
A carregar informações de partilha…
Propriedades do sistema
Tipo
JavaScript
Tamanho
309 bytes
Armazenamento utilizado
309 bytesPropriedade de WhiteHat Jr
Localização
PROFESSORAS
Proprietário
Curriculum Byjusfutureschool
Modificado
18/02/2022 por Curriculum Byjusfutureschool
Aberto
10:55 por mim
Criado
18/02/2022 com o ZIP Extractor
Sem descrição
Os leitores podem transferir ficheiros
function addUser() {
  player1Name = document.getElementById("player1NameInput").value;
  player2Name = document.getElementById("player2NameInput").value;

    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    window.location = "game_page.html";
}
