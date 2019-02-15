import { Api } from '../services/Api.js';
import editIcon from '../images/editIcon.png';
import favBlack from '../images/starBlack.png';
// import favColor from '../images/starColor.png';
import delIcon from '../images/deleteIcon.png';

const renderList = () => {
  const api = new Api();
  const req = api.request();
  return req
    .then(result => result.json())
    .then(data => {
      let ul_ref = document.getElementById('lista');
      ul_ref.innerHTML = '';
      let img;
      data.map(obj => {
        if (obj.isFavorite) img = require(`../images/starColor.png`);
        else img = require(`../images/starBlack.png`);

const markup = `<li class="optLista" id="${obj.id}">
                    <section class="grid grid-row-5">
                        <div class="item item-2">
                            <img class="picCont" src="${
                              obj.info.avatar
                            }" alt="imagem do contato">
                        </div>
                        <div class="item item-3">
                            <h1>${obj.firstName} ${obj.lastName}</h1>
                            <p>Telefone:</br> ${obj.info.phone}</p>
                            <p>Genero: </br> ${obj.gender}</p>
                        </div>
                        <div id="edit-contact" class="item item-5">
                          <a class="vi" id="${
                            obj.id
                          }"><img class="icon" src="${editIcon}" title="Visualizar"
                          alt="imagem do contato"></a>
                          <img class="icon" src="${delIcon}" title="Deletar" alt="imagem do contato">
                        </div>
                        <div class="favIcon">
                            <img class="icon fav1" src="${img}" alt="estrela de favorito">
                        </div>
                    </section>
                    </li>`;
        ul_ref.innerHTML += markup;
      });
    });
};

export default renderList;
