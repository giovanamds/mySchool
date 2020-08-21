// Criar a funcionalidade para fechar o formulário na tela

function saveForm() {

    $('.btn-save').click(function(e) {
        e.preventDefault()
            // Primeiro vou limpar a DIV
        $('#form').empty()

        // Depois vou fechar a DIV
        $('#form').hide()
    })
}

$(document).ready(function() {

    // Monitorar o clique em cima dos botões com a classe btn-view
    $('.btn-view').on('click', function(e) {
        e.preventDefault()

        // Criando uma variável para coletar o ID do botão clicado
        //Desenvolvo uma hash e juntamente com ela coleto o id do botão com a função this
        var dados = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/view-disciplinas.php',
            success: function(dados) {

                $('#form').show()

                // Carregando meu formulário dentro da DIV que deixamos em branco para mostrar os dados
                $('#form').load('src/disciplinas/visao/adiciona-disciplinas.html', function() {
                    $('.btn-save').after('<button class="btn btn-success btn-block btn-save"><i class="mdi mdi-content-save"></i>Salvar Alterações</button>')
                    $('.btn-save').hide()
                    $('h2').empty()
                    $('h2').append('Visualização de cadastro')
                    $('#disciplina').val(dados[0].disciplina)
                    $('#disciplina').attr('disabled', false)
                    $('#professor').val(dados[0].professor)
                    $('#professor').attr('disabled', false)

                    saveForm()

                })
            }
        })
    })
})