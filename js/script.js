document.addEventListener('DOMContentLoaded', () =>{
const searchButton = document.getElementById('search-button');
const cepInput = document.getElementById('cep-input');
const addressInfo = document.getElementById('address-info');

searchButton.addEventListener('click', () => {
const cep = cepInput.ariaValueMax.replace(/\D/g,''); ) //Remove caracteres não numericos*

if (cep.length !==8) {
    alert('por favor, insira um CEP valido com 8 digitos.');
return;

}

const apiUrl ='https://viacep.com.br/ws/${cep}/json/';

})


})