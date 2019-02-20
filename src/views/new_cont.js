import { submit_update } from '../services/functions';

const renderNewCont = (obj) => {
  const div = document.getElementById('cont_info');
  let avatar;
  let idBtn;
  let mCheck = '';
  let fCheck = '';
  if(obj.avatar == ''){
    avatar = require('../images/ContatoEx.png');
    idBtn = 'submit';
  }
  else{
    avatar = obj.avatar;
    idBtn = 'update';
  }

  if(obj.gender == 'm'){
    mCheck = 'checked';
  }else{
    fCheck = 'checked';
  }


  const cont = `
      <section id="forms" class="gridForm">
        <div class="picInfo">
            <img id="contPic" class="response picLarg" src="${avatar}" alt="imagem do contato">
            <br>Adicione URL</label><br>
            <input type="text" id="urlpic" placeholder="url da foto" value="${avatar}"><br>
            <button class="btn"  id="pic_car" type="button">Carregar</button>
        </div>

        <div clasS="gen_info">
        <form id="genForm">
        <label>Genero:</label></br>
           <input type="radio" name="gender" id="m" value="m" ${mCheck}> <label for="male">
             Masculino</label><br>
           <input type="radio" name="gender" id="f" value="f" ${fCheck}><label for="female"> Feminino </label><br>
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
            <input type="text" name="adrInfo" id="adress" placeholder="Rua/av, bairro, nº" value="${obj.address}"  /><br>

            <label for="phone">Telefone:</label><br>
            <input type="text" name="telInfo" id="phone" placeholder="(xx)xxxxx-xxxx" value="${obj.phone}" ><br>

        </div>

        <div class="comInfo">
            <label for="comment">Comentarios:</label>
            <textarea name="comInfo"  class="com_grid" id="comment" cols="73" rows="8" value="Comments" >${obj.comments}</textarea>
        </div>

    </section>
    <div class="center input_info">
        <input class="btn" type="button" id="${idBtn}" value="Cadastrar">
        <a><input class="btn" type="button" id="cancel" value="Cancelar"></a>
    </div>
    </form>
      `;
  div.innerHTML = cont;
  document.getElementById('root').style.display = 'block';
  div.focus();

  if(idBtn == 'update'){
    const upd = document.getElementById('update');
    upd.addEventListener('click', () =>{

      submit_update(obj.id);
    })

    const cancel = document.getElementById('cancel');
    cancel.addEventListener('click', () =>{
      document.getElementById('root').style.display = 'none';
    })
  }
};

export default renderNewCont;
