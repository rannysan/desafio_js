import editIcon from '../images/editIcon.png';
import delIcon from '../images/deleteIcon.png';
import chunk from 'lodash/chunk';
import { pagination } from '../services/functions';

const renderList = page => {
  const { contacts, loading } = window.state;


  pagination(contacts, page);
  const pag = chunk(contacts, 10);
  const page_act = pag[page];


  const list_ref = document.getElementById('lista');

  let html = '';
  let img;

  page_act.forEach(function(obj) {
    let classFav = '';
    if (obj.isFavorite){
      img = require('../images/starColor.png');
      classFav = 'isfavOn';
    }
    else {
      img = require('../images/starBlack.png');
      classFav = 'isfavOff';
    }

    html += `
      <li class="optLista">
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
                        <div id="${obj.id}" class="item item-5">
                          <a class="vi"><img class="icon" src="${editIcon}" title="Visualizar"
                          alt="imagem do contato"></a>
                          <img class="icon del" src="${delIcon}" title="Deletar" alt="imagem do contato">
                        </div>
                        <div class="favIcon">
                           <img class="icon fav1 ${classFav}" id="${obj.firstName}" src="${img}" alt="estrela de favorito">
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
export default renderList;
