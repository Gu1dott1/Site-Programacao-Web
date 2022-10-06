function etapaLogin(info){
    let controle = info;

    const troca = document.querySelector("div.cardlogin1");

    var conteudo = "";

    if (controle == 1){
        conteudo += '<button class="botaoLogin1Pressed" onclick="etapaLogin(1)">LOGIN</button>'
        conteudo += '<button class="botaoLogin2" onclick="etapaLogin(2)">REGISTRAR-SE</button>'
        conteudo += '<div class="loginUsuario"></div>'
        conteudo += '<br>'
        conteudo += '<br>'
        conteudo += '<br>'
        conteudo += '<br>'
        conteudo += '<form id="formEntrar">'
        conteudo += '<h3 class="titulo">Usuário:</h3>'
        conteudo += '<input type="text" id="login" class="inputLogin" placeholder="Login" name="login">'
        conteudo += '<br>'
        conteudo += '<h3 class="titulo">Senha:</h3>'
        conteudo += '<input type="password" id="senha" class="inputLogin" placeholder="Senha" name="senha">'
        conteudo += '<div class="rodapeCard"><button  class="botaoEntrar" onclick="entrar()">Entrar</button></div>'
        conteudo += '</form>'

        troca.innerHTML = conteudo;
      
    }

    else if (controle == 2){
        conteudo += '<button class="botaoLogin1" onclick="etapaLogin(1)">LOGIN</button>'
        conteudo += '<button class="botaoLogin2Pressed" onclick="etapaLogin(2)">REGISTRAR-SE</button>'
        conteudo += '<div class="loginUsuario"></div>'
        conteudo += '<br>'
        conteudo += '<br>'
        conteudo += '<form id="formCadastro">'
        conteudo += '<h3 class="titulo">Usuario:</h3>'
        conteudo += '<input type="text" id="usuarioCadastro" class="inputLogin" placeholder="Nome Completo" name="usuarioCadastro">'
        conteudo += '<h3 class="titulo">E-Mail:</h3>'
        conteudo += '<input type="text" id="emailCadastro" class="inputLogin" placeholder="E-mail" name="emailCadastro">'
        conteudo += '<h3 class="titulo">Senha:</h3>'
        conteudo += '<input type="password" id="senhaCadastro" class="inputLogin" placeholder="Senha" name="senhaCadastro">'
        conteudo += '<div class="rodapeCard"><button class="botaoCadastrar" onclick="salvar() onclick="etapaLogin(1) "">Cadastrar</button></div>'
        conteudo += '</form>'
        
        troca.innerHTML = conteudo;
    }
}

function salvar(){
    var obejetoForm = document.getElementById('formCadastro');
    var dados = new FormData(obejetoForm);


    if(document.getElementById("usuarioCadastro") !="" &&
       document.getElementById("emailCadastro") !="" &&
       document.getElementById("senhaCadastro") !=""){

        fetch("php/index.php",{
            method: "POST",
            body: dados
        })

    }else{
        alert("Preencha TODOS os campos ");
    }

}

function entar(){
    var obejetoForm2 = document.getElementById('formEntrar');
    var dados2 = new FormData(obejetoForm2);


    if(document.getElementById("login") !="" &&
       document.getElementById("senha") !=""){

        fetch("php/index2.php",{
            method: "POST",
            body: dados2
        })

        

    }else{
        alert("Preencha TODOS os campos ");
    }

}
