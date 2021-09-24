function consultaCep(){
    const cep = document.querySelector('#cep').value
    

    let requestURL = `https://viacep.com.br/ws/${cep}/json/`
    

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    

    request.onload = function() {
        let cepConsultado = request.response;
        

        const bairro = cepConsultado.bairro
        const rua = cepConsultado.logradouro
        const cidade = cepConsultado.localidade

        

        document.querySelector('#rua').value = `${rua}`
        document.querySelector('#bairro').value = `${bairro}`
        document.querySelector('#cidade').value = `${cidade}`
        
         
      }

   
}




const btn = document.querySelector('#btn-consulta')
btn.addEventListener('click', consultaCep)