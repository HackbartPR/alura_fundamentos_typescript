import { NegociacaoController } from "./controllers/NegociacaoController.js";

const negociacaoController = new NegociacaoController();

const form = document.getElementById("form");
form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    negociacaoController.adicionar();
});