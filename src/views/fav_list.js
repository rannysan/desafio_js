import editIcon from '../images/editIcon.png';
import delIcon from '../images/deleteIcon.png';
import chunk from 'lodash/chunk';
import { pagination } from '../services/functions';

const renderFavList = (page) => {
  const { favorites, loading } = window.state;

  pagination(favorites, page);
  let pag = chunk(favorites, 10);
  let page_act = pag[page];


  const list_ref = document.getElementById('lista');

  let html = '';
  let img;

  page_act.forEach(function(obj) {
    if (obj.isFavorite) img = require('../images/starColor.png');
    else img = require('../images/starBlack.png');
    html += `
      <li class="optLista" id="${obj.id}">
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
                    </li>
      `;
    if (loading) {
      html = '<h1>Loading</h1>';
    }

    list_ref.innerHTML = html;
  });
};
export default renderFavList;
