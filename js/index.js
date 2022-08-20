const listaMensagens = document.getElementById("listaMensagens");

const BASE_URL = "https://aniver-back.herokuapp.com";

const obterTodasMensagens = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mensagens`);
    const mensagens = response.data;
    console.log(mensagens);
    mensagens.forEach((msg) => {
      console.log(msg.texto);
      let item = document.createElement("li");
      item.innerHTML = `<h3>${msg.nomeOrEmail} comentou:</h3><p>${msg.texto}</p>`;
      listaMensagens.appendChild(item);
    });
  } catch (errors) {
    console.error(errors);
  }
};
obterTodasMensagens();
const redirectToHome = () => {};
