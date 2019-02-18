import editIcon from '../images/editIcon.png';

const renderNewCont = () => {
  const aa = document.getElementById('cont_info');
  const cont = `
      <section id="forms" class="gridForm">
        <div class="picInfo">
            <img id="contPic" class="response" src="${editIcon}" alt="imagem do contato">
            <br>Adicione URL</label><br>
            <input type="text" id="urlfoto" placeholder="url da foto"><br>
            <button class="btn" type="submit">Carregar</button>
            <label>Genero:</label></br>
                <input type="radio" name="gender" id="m" value="male" checked> <label for="male">
                    Masculino</label><br>
                <input type="radio" name="gender" id="f" value="female"><label for="female"> Feminino </label><br>
        </div>

        <div class="infos">
            <form action="">
                <label for="fname">Primeiro Nome:</label></br>
                <input type="text" name="firstname" id="fname" placeholder="Primeiro nome" maxlength="15"></br>

                <label for="email">Email:</label></br>
                <input type="email" name="mailInfo" id="email" placeholder="exemplo@exemplo.com" maxlength="30"></br>

                <label for="company">Empresa:</label> <br>
                <input type="text" name="compInfo" id="company" placeholder="Empresa" /><br>
        </div>

        <div class="moreInfos">
            <label for="lname">Ultimo nome:</label></br>
            <input type="text" name="lastname" id="lname" placeholder="Ultimo nome" maxlength="15"></br>

            <label for="adress">Endereço:</label><br>
            <input type="text" name="adrInfo" id="adress" placeholder="Rua/av, bairro, nº" /><br>

            <label for="phone">Telefone:</label><br>
            <input type="number" name="telInfo" id="phone" placeholder="(xx)xxxxx-xxxx"><br>

        </div>

        <div class="comInfo">
            <label for="comment">Comentarios:</label>
            <textarea name="comInfo" id="comment" cols="70" rows="8"></textarea>
        </div>

    </section>
    <div class="center">
        <input class="btn" type="submit" value="Cadastrar">
        <a href="index.html"><input class="btn" type="button" value="Cancelar"></a>
    </div>
    </form>
      `;
  aa.innerHTML = cont;
  document.getElementById('root').style.display = 'block';
  aa.focus();
};

export default renderNewCont;
