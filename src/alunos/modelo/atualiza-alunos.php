<?php

    // Vou me conectar ao banco de dados
    include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];
    $curso = $_REQUEST['curso'];
    $tipo = $_REQUEST['tipo'];
    $senha = $_REQUEST['senha'];
    $id = $_REQUEST['id'];

    if($nome == "" || $curso == "" || $tipo == ""){
        echo "O campo com o nome da disciplina não pode estar vazio, tente novamente";
    }
    else{
        // Gerar um script SQL para cadastro das informações no banco de dados
        $sql = "UPDATE alunos SET nome = '".$nome."', curso = '".$curso."', senha = '".md5($senha)."', tipo = ".$tipo." WHERE id = ".$id."";

        // Testar o comando SQL no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array('return' => true);
        }
        else{
            $dados = array('return' => false);
        }
    }
    echo json_encode($dados);