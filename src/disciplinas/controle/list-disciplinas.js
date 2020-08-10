$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/disciplinas/modelo/list-disciplinas.php',
        success: function(dados) {
            for (var i = 0; i < dados.length; i++) {


                let resultado = `
                    <tr>
                        <td>${dados[i].id}</td>
                        <td>${dados[i].disciplina}</td>
                        <td>${dados[i].professor}</td>
                        <td>
                            <button class="btn btn-info btn-view btn-sm"><i class="mdi mdi-eye"></i></button>
                            <button class="btn btn-primary btn-edit btn-sm"><i class="mdi mdi-pencil"></i></button>
                            <button class="btn btn-danger btn-delete btn-sm"><i class="mdi mdi-trash-can"></i></button>
                        </td>
                    </tr>
                    `

                $('tbody').append(resultado)
            }
        }
    })

})