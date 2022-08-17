const button = document.getElementById("button");
const input = document.getElementById("nome");
const textarea = document.getElementById("msg");

const BASE_URL = "https://aniver-back.herokuapp.com";

button.onclick = function () {
  salvarMensagem();
};

const obterTodasMensagens = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mensagens`);
    const todoItems = response.data;
    console.log(`GET: Here's the list of todos`, todoItems);
    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};

const salvarMensagem = async () => {
  try {
    const mensagem = {
      nomeOrEmail: input.value,
      texto: textarea.value,
    };
    const response = await axios.post(`${BASE_URL}/mensagens`, mensagem);
    alert(`Obrigado pela mensagem, ${input.value}.`);
  } catch (errors) {
    console.error(errors);
  }
};
