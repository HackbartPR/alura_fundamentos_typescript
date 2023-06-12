export class NegociacaoController {
    constructor() {
        this._inputData = document.getElementById('data');
        this._inputQuant = document.getElementById('quantidade');
        this._inputValor = document.getElementById('valor');
    }
    adicionar() {
        console.log(this._inputData);
        console.log(this._inputQuant);
        console.log(this._inputValor);
    }
}
