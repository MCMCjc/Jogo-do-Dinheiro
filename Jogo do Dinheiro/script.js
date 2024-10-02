const avanca = document.querySelectorAll ('.btn-proximo');
avanca.forEach (button =>){
    button.addEventlistener ('clck' , function () {
        const atual = document.querySelector ('ativo');
    const proximoPasso = 'passo-'+ this.getAttribute ('dataProximo');
atual.classList.remove ('ativo');
document.getElementByld (proximoPasso).classList.add('ativo');
});
});