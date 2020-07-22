<?php

    // Vou me conectar ao banco de dados
    include('../../conexao/conn.php');

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];

    if($desciplina = ""){
        echo "O campo com o nome da disciplina não pode estar vazio, tente novamente";
    }
    else{
        // Gerar um script SQL para cadastro das informações no banco de dados
        $sql = "INSERT INTO disciplinas (disciplina, professor) VALUES ()";
    }

    