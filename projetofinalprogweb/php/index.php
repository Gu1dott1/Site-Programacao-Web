<?php
    echo $_POST["usuarioCadastro"];
    echo "\n" . $_POST["emailCadastro"];
    echo "\n" . $_POST["senhaCadastro"];
   
    $usuario= $_POST["usuarioCadastro"];
    $email = $_POST["emailCadastro"];
    $senha = $_POST["senhaCadastro"];
    

    $conexao = mysqli_connect("localhost:3306","root","vinicius","siteweb");

    $query = "INSERT INTO usuario (nome, email, senha) VALUES('$usuario','$email','$senha')";
    mysqli_query($conexao, $query);
    
    $resposta["status"] = "s";
    $resposta["mensagem"] = "Gravado com sucesso";
    $objetoJSON = json_encode($resposta);
    echo $objetoJSON;
?>