$(document).ready(function() {

    // Criar uma função para monitorar o click em cima do botão com a classe btn-save
    $('.btn-save').click(function(e) {
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
            url: 'src/disciplinas/modelo/adiciona-disciplinas.php', //É para onde irá as informações
            success: function(dados) {
                // Demostrar se deu certo ou errado
                $('#adiciona-disciplinas').after(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.mensagem}</strong> 
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                `)

            }
        })
    })
})