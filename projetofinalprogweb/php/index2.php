<?php
    echo $_POST["login"];
    echo "\n" . $_POST["senha"];
   
    $login= $_POST["login"];
    $senha = $_POST["senha"];
    

    $conexao = mysqli_connect("localhost:3306","root","vinicius","siteweb");

    $query = "SELECT nome, senha FROM usuario VALUES('$login','$senha')";

    echo "\n" . $query;

    mysqli_query($conexao, $query);


?>