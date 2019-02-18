import { Api } from '../services/Api.js';
import editIcon from '../images/editIcon.png';
import delIcon from '../images/deleteIcon.png';

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

          <a href="insert.html"><img class="icon2" src="${editIcon}" title="Visualizar"
                  alt="imagem do contato"></a>
          <img class="icon2" src="${delIcon}" title="Deletar" alt="imagem do contato">
      </div>
  </section>
      `;
      aa.innerHTML = cont;
      document.getElementById('root').style.display = 'block';
      aa.focus();
    });
};

export default renderContact_info;
