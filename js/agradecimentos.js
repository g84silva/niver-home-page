import { post } from "axios";

const button = document.getElementById("button");
const input = document.getElementById("nome");
const textarea = document.getElementById("msg");

button.onclick = function () {
  alert("button clicked");
  salvarMensagem();
};

function salvarMensagem() {
  const mensagem = {
    nameOrEmail: input.value,
    texto: textarea.value,
  };
  post("asdasdasd/mensagem", mensagem)
    .then((response) => {
      console.log(response.data);
      alert(input.value + " Obrigado pela sua mensagem.");
    })
    .cath((err) => console.error(err));
}
