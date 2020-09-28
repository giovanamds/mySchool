<?php

    // Vou me conectar ao banco de dados
    include('../../conexao/conn.php');

    $id = $_REQUEST['id'];

    if($id == ""){
        $dados = array(
            'tipo' => 'alert-danger',
            'mensagem' => 'O id de registro não foi informado!'
        );
    }
    else{
        // Gerar um script SQL para cadastro das informações no banco de dados
        $sql = "DELETE FROM alunos WHERE id = ".$id."";

        // Testar o comando SQL no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array(
                'tipo' => 'alert-success',
                'mensagem' => 'Registro excluído com sucesso!'
            );
        }
        else{
            $dados = array(
                'tipo' => 'alert-danger',
                'mensagem' => 'Ocorreu um erro ao excluir o registro'
            );
        }
    }
    echo json_encode($dados);

    