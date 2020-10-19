<?php
// Vou conectar ao meu banco de dados
    include('../../conexao/conn.php');

    // Recebendo as informações enviadas pelo formulário
    $id = $_REQUEST['id'];
    $senha = $_REQUEST['senha'];

    // Converter a senha para a criptografia do banco de dados
    $senha = md5($senha);

    // Criar uma consulta ao banco de dados para ver se o usuário existe ou não e se os dados estão corretos
    $sql = "SELECT * FROM alunos WHERE id = ".$id." AND senha = '".$senha."'";

    // Vou pegar a minha linha de consulta e executar no banco de dados
    $resultado = mysqli_query($conecta, $sql);

    if($resultado && mysqli_num_rows($resultado)>0){
        $dados = array('result' => true);
    }

    else{
        $dados = array('result' => false);
    }

    echo json_encode($dados);