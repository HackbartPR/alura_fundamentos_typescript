import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuant = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = new Negociacao(new Date(this._inputData.value.replace('-', ',')), parseInt(this._inputQuant.value), parseFloat(this._inputValor.value));
        this.limparFormulario();
        console.log(negociacao);
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuant.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
