// Criar a funcionalidade para fechar o formulário na tela

function closeForm() {

    $('.btn-close').click(function(e) {
        e.preventDefault()
            // Primeiro vou limpar a DIV
        $('#form').empty()

        // Depois vou fechar a DIV
        $('#form').hide(5000)
        $('.row').show(3000)
    })
}

$(document).ready(function() {

    // Monitorar o clique em cima dos botões com a classe btn-view
    $('.btn-edit').on('click', function(e) {
        e.preventDefault()

        // Criando uma variável para coletar o ID do botão clicado
        //Desenvolvo uma hash e juntamente com ela coleto o id do botão com a função this
        var dados = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/view-alunos.php',
            success: function(dados) {

                $('#form').show(5000)
                $('.row').hide(3000)

                // Carregando meu formulário dentro da DIV que deixamos em branco para mostrar os dados
                $('#form').load('src/alunos/visao/adiciona-alunos.html', function() {
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"> <i class="mdi mdi-close"></i> Fechar </button>')
                    $('.btn-save').addClass('btn-update').removeClass('btn-save')
                    $('h2').empty()
                    $('h2').append('Edição de cadastro')
                    $('#nome').val(dados[0].nome)
                    $('#curso').val(dados[0].curso)
                    $('#senha').val(dados[0].senha)
                    $('#tipo').append(`<option value="${dados[0].tipo}" selected>${dados[0].tipo == 1 ? 'Administrador' : 'Aluno'}</option>`)
                    $('#tipo').after(`<input type="hidden" name="id" id="id" value="${dados[0].id}">`)

                    closeForm()

                })

                $('body').append('<script src="src/alunos/controle/atualiza-alunos.js"></script>')
            }
        })
    })
})