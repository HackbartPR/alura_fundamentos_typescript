import { NegociacaoController } from "./controllers/NegociacaoController.js";
const negociacaoController = new NegociacaoController();
const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    negociacaoController.adicionar();
});
