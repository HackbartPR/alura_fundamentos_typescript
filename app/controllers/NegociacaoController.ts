import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoController {
    private _inputData: HTMLInputElement
    private _inputQuant: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuant = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    adicionar(): void {
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace('-', ',')),
            parseInt(this._inputQuant.value),
            parseFloat(this._inputValor.value)
        );
        
        this.limparFormulario();

        console.log(negociacao);
    }

    limparFormulario(): void {
        this._inputData.value = '';
        this._inputQuant.value = '';
        this._inputValor.value= '';

        this._inputData.focus();
    }
}