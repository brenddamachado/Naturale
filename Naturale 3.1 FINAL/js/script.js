function carregar(){
    var msg = document.getElementById("mensagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos=data.getMinutes()
    var dia= data.getDate()
    var mes=data.getMonth() +1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

    msg.innerHTML = ` <strong>${dia}/0${mes} ás ${hora}:${minutos}</strong>`
    
    if(hora >= 0 && hora <12){
        document.body.style.background = ""
    } else if(hora >= 12 && hora < 18){
        document.body.style.background = "#F0E68C"
    } else{
        document.body.style.background = "linear-gradient(#d8e98b ,#8aac50)"
    }
}

function Enviar(){
    
    var nome = document.getElementById("nome");
    var email = document.getElementById("Email");
    var numero = document.getElementById("numero");
    var pedido = document.getElementById("pedido");
    


    if(nome.value != "" &&  email.value != "" && numero.value != "" && pedido.value != ""){
        alert(`Obrigado sr(a) ${nome.value} os seus dados foram encaminhados com sucesso\n seu pedido será preparado`); 
    }else{
        alert(`\tERRO \nPreencha todos os campos corretamente`);
    }
}