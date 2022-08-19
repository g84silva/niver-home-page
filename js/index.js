const buttonAgradecimento = document.getElementById("buttonAgradecimento");
const input = document.getElementById("nome");
const textarea = document.getElementById("msg");
const form = document.getElementById("msgUser");

const listaMensagens = document.getElementById("listaMensagens");

const BASE_URL = "https://aniver-back.herokuapp.com";

buttonAgradecimento.onclick = async function () {
  salvarMensagem();
  obterTodasMensagens();
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
  } catch (errors) {
    console.error(errors);
  }
};
const obterTodasMensagens = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mensagens`);
    mensagens = response.data;

    mensagens.forEach((msg) => {
      let item = document.createElement("li");
      item.innerHTML(`<p>${msg.texto}</p>`);
      listaMensagens.appendChild(item);
    });

    console.log(`GET: Here's the list of todos`, mensagens);
    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};
const redirectToHome = () => {};
