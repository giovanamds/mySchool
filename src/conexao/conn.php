<?php
    //Demostre todos os erros e alertas existentes quanto o meu código e quanto a interação com o B.D.
    //Os dois comando a seguir são comandos de configuração do servidor APACHE
    ini_set('display_erros', true);
    error_reporting(E_ALL);

    // Criação das variáveis para conexão com o B.D. 
    $hostname = "localhost";
    $database = "myschool";
    $username = "root";
    $password = "";

    if($conecta  = mysqli_connect($hostname, $username, $password, $database)){
       // echo 'Conectado ao banco de dados '.$database.'...';

    }
    else{
        echo 'Erro: '.mysqli_connect_error();
    }

