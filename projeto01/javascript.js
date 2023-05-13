

function consultarCidade(){
        var c = document.getElementById("city_name")
        var city_name = String(c.value)      
        var url = 'https://api.hgbrasil.com/weather?format=json-cors&key=e6f8d62d&city_name=' + city_name
        //alert(url)
        var data = new Date()
        var hora =  data.getHours()
        if(c.value.length == 0){
            alert('[ERRO] CAMPO OBRIGATÓRIO!')
        }else{
        resultado.innerHTML = ''    
        fetch(url)
            .then(function(response) {
                    response.json().then(function(data){
                    console.log('Resultado da requisicão ' + data.response)
                    var mostrar = data.results
                    var resultado = document.getElementById('resultado')
                    resultado.innerHTML +='<p>Data da consulta: <strong>'+mostrar.date+'</strong></p>'+
                    '<p>Hora da consulta: <strong>'+mostrar.time+' Hrs</strong></p>'+'<p>Cidade, Estado: <strong>'+mostrar.city+'</strong></p>'+
                    '<p>Temperatura: <strong>'+mostrar.temp+'°C</strong></p>'+'<p>Tempo: <strong>'+mostrar.currently+'</strong></p>'
                    var img = document.getElementById('imagem')
                    if(hora >= 0 && hora < 12){
                        img.src = 'manha.png'
                    } else if(hora >= 12 && hora <= 18){
                        img.src = 'tarde.png'
                    } else{
                        img.src = 'noite.png'
                    }
                })
            })
            .catch(function(err){
                console.error("O seguinte erro ocorreu durante a requisição: "+ err)
            })
c.value = ''
c.focus()
}
}        