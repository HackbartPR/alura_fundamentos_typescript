export class NegociacaoController {
    private _inputData: HTMLElement;
    private _inputQuant: HTMLElement;
    private _inputValor: HTMLElement;

    constructor() {
        this._inputData = document.getElementById('data');
        this._inputQuant = document.getElementById('quantidade');
        this._inputValor = document.getElementById('valor');
    }

    adicionar(): void {
        console.log(this._inputData);
        console.log(this._inputQuant);
        console.log(this._inputValor);
    }
}