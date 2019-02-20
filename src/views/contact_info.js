import { Api } from '../services/Api.js';
import editIcon from '../images/editIcon.png';
import delIcon from '../images/deleteIcon.png';
import { confirm } from '../services/functions';
import renderNewCont from './new_cont';

const renderContact_info = id => {
  const api = new Api();
  const reqID = api.requestID(id);
  return reqID
    .then(result => result.json())
    .then(data => {
      const aa = document.getElementById('cont_info');
      const cont = `
      <section id="informacao" class="contato contGrid">
      <div class="picCont">
          <img id="contPic" class="picCont picLarg" src="${
            data.info.avatar
          }" alt="imagem do contato">
      </div>
      <div class="infoBasic">
          <h1>${data.firstName} ${data.lastName}</h1>

          <h2>Email:</h2>
          <p>${data.email}</p>

          <h2>Genero:</h2>
          <p>${data.gender}</p>

      </div>
      <div class="infoCont infoGrid">
          <h1>Informações</h1>

          <h2>Company:</h2>
          <p>${data.info.company}</p>

          <h2>Endereço:</h2>
          <p>${data.info.address}</p>

          <h2>Telefone:</h2>
          <p>${data.info.phone}</p>

          <h2>Comentarios:</h2>
          <textarea class="com" disabled>${data.info.comments}</textarea>

          <a id="editBtn" href="#"><img class="icon2" src="${editIcon}" title="update"
                  alt="imagem do contato"></a>
          <img class="icon2" src="${delIcon}" title="Deletar" id="delBtn" alt="imagem do contato">
      </div>
  </section>
      `;
      aa.innerHTML = cont;
      document.getElementById('root').style.display = 'block';
      aa.focus();

      const delBtn = document.getElementById('delBtn');
      delBtn.addEventListener('click', () =>{
        confirm(data.id);
        document.getElementById('root').style.display = 'none';
      })

      const editBtn = document.getElementById('editBtn');
      editBtn.addEventListener('click', () =>{
        let obj = {
          id: id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          gender: data.gender,
          isFavorite: false,
          company: data.info.company,
          avatar: data.info.avatar,
          address: data.info.address,
          phone: data.info.phone,
          comments: data.info.comments
        };

        renderNewCont(obj);

      })

    });
};

export default renderContact_info;
