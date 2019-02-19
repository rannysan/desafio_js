

const renderNewCont = (obj) => {
  const div = document.getElementById('cont_info');
  const cont = `
      <section id="forms" class="gridForm">
        <div class="picInfo">
            <img id="contPic" class="response picLarg" src="${obj.avatar}" alt="imagem do contato">
            <br>Adicione URL</label><br>
            <input type="text" id="urlpic" placeholder="url da foto"><br>
            <button class="btn"  id="pic_car" type="button">Carregar</button>
        </div>

        <div clasS="gen_info">
        <form id="genForm">
        <label>Genero:</label></br>
           <input type="radio" name="gender" id="m" value="m" checked> <label for="male">
             Masculino</label><br>
           <input type="radio" name="gender" id="f" value="f"><label for="female"> Feminino </label><br>
          </form>
        </div>

        <div class="infos">
            <form id="formComplete">
                <label for="fname">Primeiro Nome:</label></br>
                <input type="text" name="firstname" id="fname" placeholder="Primeiro nome" value="${obj.firstName}" maxlength="15"></br>

                <label for="email">Email:</label></br>
                <input type="email" name="mailInfo" id="email" placeholder="exemplo@exemplo.com" value="${obj.email}"  maxlength="30"></br>

                <label for="company">Empresa:</label> <br>
                <input type="text" name="compInfo" id="company" value="${obj.company}"  placeholder="Empresa" /><br>
        </div>

        <div class="moreInfos">
            <label for="lname">Ultimo nome:</label></br>
            <input type="text" name="lastname" id="lname" placeholder="Ultimo nome" value="${obj.lastName}"  maxlength="15"></br>

            <label for="adress">Endereço:</label><br>
            <input type="text" name="adrInfo" id="adress" placeholder="Rua/av, bairro, nº" value="${obj.adress}"  /><br>

            <label for="phone">Telefone:</label><br>
            <input type="text" name="telInfo" id="phone" placeholder="(xx)xxxxx-xxxx" value="${obj.phone}" ><br>

        </div>

        <div class="comInfo">
            <label for="comment">Comentarios:</label>
            <textarea name="comInfo"  class="com_grid" id="comment" cols="73" rows="8" value="${obj.comment}" ></textarea>
        </div>

    </section>
    <div class="center input_info">
        <input class="btn" type="button" id="submit" value="Cadastrar">
        <a><input class="btn" type="button" id="cancel" value="Cancelar"></a>
    </div>
    </form>
      `;
  div.innerHTML = cont;
  document.getElementById('root').style.display = 'block';
  div.focus();
};

export default renderNewCont;
