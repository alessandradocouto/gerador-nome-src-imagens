
(function(){

    'use strict';

    const textareaLeft = document.querySelector('#textarea-left');
    const textareaRight = document.querySelector('#textarea-right');
    const buttonTypeJpg = document.querySelector('.button-type-jpg');
    const buttonTypePng = document.querySelector('.button-type-png');
    const buttonSelect = document.querySelector('.button-select-all');
    const buttonDel = document.querySelector('.button-del');

    function changeNameImage(str){
        //quebrar o espaço entre as palavras e colocar hífen
        const newStr = str.value.split(' ').join('-');
        return newStr;
    }


    function eventClickJpg(event){
        // com o .value, pego o valor do text area sempre que ele mudar
        // changeNameImage(textareaLeft)
        textareaRight.innerHTML = changeNameImage(textareaLeft) + '.' + buttonTypeJpg.textContent;
    }

    function eventClickPng(event){
        textareaRight.innerHTML = changeNameImage(textareaLeft) + '.' + buttonTypePng.textContent;
    }

    function selectText(event) {
        // sem passagem de parâmetro do textarea-right
        textareaRight.focus();
        textareaRight.select(); 
    }

    function delText(){
        textareaLeft.value = '';
        textareaLeft.focus();    
    }

    
    buttonTypeJpg.addEventListener('click', eventClickJpg);
    buttonTypePng.addEventListener('click', eventClickPng);
    buttonSelect.addEventListener('click', selectText);
    buttonDel.addEventListener('click', delText);


})();



