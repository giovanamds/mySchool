<?php

    // Vou me conectar ao banco de dados
    include('../../conexao/conn.php');

    session_start();

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];
    $nota = $_REQUEST['nota'];
    $id_alunos = $_SESSION['id'];
    $id = $_REQUEST['id'];

    if($disciplina == ""){
        echo "O campo com o nome da disciplina não pode estar vazio, tente novamente";
    }
    else{
        // Gerar um script SQL para cadastro das informações no banco de dados
        $sql = "UPDATE disciplinas SET disciplina = '".$disciplina."', professor = '".$professor."',
        nota = '".$nota."', id_alunos = '".$id_alunos."' WHERE id = ".$id."";

        // Testar o comando SQL no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array('return' => true);
        }
        else{
            $dados = array('return' => false);
        }
    }
    echo json_encode($dados);

    