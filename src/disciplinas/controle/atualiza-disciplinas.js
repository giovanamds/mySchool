$(document).ready(function() {

    // Criar uma função para monitorar o click em cima do botão com a classe btn-save
    $('.btn-update').click(function(e) {
        e.preventDefault()

        // Iremos coletar todas as informações digitadas no formulário
        var dados = $('#adiciona-disciplinas').serialize()
        console.log(dados)

        //Criar uma requisisão AJAX assíncrona
        $.ajax({
            type: 'POST', // É como as informações serão enviadas ao PHP
            dataType: 'JSON', // É o modo de transição de dados entre a visão e o modelo
            assync: true, // É somente para demostrar que a requisição será assíncrona
            data: dados, // É as informações que serão enviadas ao PHP
            url: 'src/disciplinas/modelo/atualiza-disciplinas.php', //É para onde irá as informações
            success: function(dados) {
                if (dados.return == true) {
                    $('#form').empty()
                    $('#form').hide()

                    //Limpando a tabela
                    $('tbody').empty()

                    //Recarregando a tabela
                    $('body').append('<script src="src/disciplinas/controle/list-disciplinas.js"></script>')
                    $('.row').show()
                } else {
                    alert('Deu algo errado!')
                }
            }
        })
    })
})