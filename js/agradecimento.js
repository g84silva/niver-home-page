const buttonAgradecimento = document.getElementById("button");
const input = document.getElementById("nome");
const textarea = document.getElementById("msg");
const form = document.getElementById("msgUser");

const BASE_URL = "https://aniver-back.herokuapp.com";

buttonAgradecimento.onclick = async function () {
  salvarMensagem();
};

const salvarMensagem = async () => {
  try {
    const mensagem = {
      nomeOrEmail: input.value,
      texto: textarea.value,
    };
    const response = await axios.post(`${BASE_URL}/mensagens`, mensagem);
    alert(`Obrigado pela mensagem, ${input.value}.`);
    form.reset();
    location.href = "./../index.html";
  } catch (errors) {
    console.error(errors);
  }
};
