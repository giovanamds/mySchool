<?php

    // Conectar-se ao banco de dados
    include('../../conexao/conn.php');

    session_start();

    //Criar uma consulta ao banco de dados, para listar as informações existentes
    $sql = "SELECT * FROM disciplinas WHERE id_alunos = ".$_SESSION['id']."";

    // Estou executando minha query
    $resultado = mysqli_query($conecta, $sql);

    // Irei testar os resultados da query, onde irei verificar se existe registro e se é maior que 0
    if($resultado && mysqli_num_rows($resultado) > 0){
        // Associar os registros encontrados em um array
        while($linha = mysqli_fetch_assoc($resultado)){
            $dados[] = array_map(null , $linha);
        }
    }
    else{
        $dados = array('erro' => 'Não foi possível buscar resultado algum');
    }
    echo json_encode($dados);
