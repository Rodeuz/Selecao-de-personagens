const personagens = document.querySelectorAll(".personagem");
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    RemoverClasse();

    personagem.classList.add("selecionado");

    AlterarImagem(personagem);

    AlterarTitulo(personagem);

    AlterarDescricao(personagem);
  });
});

function AlterarDescricao(personagem) {
  const Descricao = document.querySelector("#descricao-personagem");
  Descricao.innerHTML = personagem.getAttribute("data-description");
}

function AlterarTitulo(personagem) {
  const TituloDescricao = document.querySelector(".nome-personagem");
  TituloDescricao.innerHTML = personagem.getAttribute("data-name");
}

function AlterarImagem(personagem) {
  const imagem = document.querySelector(".personagem-grande");

  const idPersonagem = personagem.attributes.id.value;
  imagem.src = `./src/img/${idPersonagem}.png`;
}

function RemoverClasse() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
