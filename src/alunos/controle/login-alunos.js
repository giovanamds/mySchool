$(document).ready(function() {

    $('.btn-login').click(function(e) {
        e.preventDefault()

        var dados = $('#form-login').serialize()

        //Criar uma requisisão AJAX assíncrona
        $.ajax({
            type: 'POST', // É como as informações serão enviadas ao PHP
            dataType: 'JSON', // É o modo de transição de dados entre a visão e o modelo
            assync: true, // É somente para demostrar que a requisição será assíncrona
            data: dados, // É as informações que serão enviadas ao PHP
            url: 'src/alunos/modelo/login-alunos.php', //É para onde irá as informações
            success: function(dados) {

                if (dados.result == true) {
                    $(location).attr('href', 'painel.html')
                } else {
                    // Demostrar se deu certo ou errado
                    $('#form-login').after(`
                    <div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
                        <strong>Id ou senha informado incorreto... Por favor tente novamente!</strong> 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    `)
                }

                // Limpando os campos do meu formulário
                $('#id').val('')
                $('#senha').val('')
            }
        })
    })
})