$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburger').click(function () {
        $('nav').slideToggle();
    })

    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.money2').mask("#.##0,00", { reverse: true });
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', { reverse: true });
    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true })

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages:{
            nome:'Informe o nome completo'
        },
        submitHandler: function(form) {
           console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncrretos = validador.numberOfInvalids();
            console.log(camposIncrretos)
        }
    })

    $('.lista-veiculos button').click( function(){
        const destino =$('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo)
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})