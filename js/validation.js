'use strict';

$(document).ready(function() {

    $("#formCheckout").validate({
        rules: {
            nomeEmpresa: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            selectRegiao: {
                required: true
            },
            primeiroNome: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            sobreNome: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            endereco: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            bairro: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            cidade: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            cep: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            email: {
                maxlength: 100,
                minlength: 10,
                required: true
            }
        }

    })
    
    $("#formContato").validate({
        rules: {
            primeiroNome: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            sobreNome: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            email: {
                maxlength: 100,
                minlength: 10,
                required: true
            },
            assunto: {
                required: true,
                minlength: 10
            }
        }

    })

})