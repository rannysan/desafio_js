import { getAll, favAll } from '../services/api_test';
import renderList from '../views/list';
import renderContact_info from '../views/contact_info';
import renderFavList from '../views/fav_list';
import chunk from 'lodash/chunk';

//renderizar lista completa
export const render = page => {
  //renderList(0);
  getAll().then(() => {
    renderList(page);
    var icon = document.getElementsByClassName('vi');
    Array.from(icon).forEach(function(element) {
      element.addEventListener('click', () => {
        const id = element.id;
        renderContact_info(id);
        return false;
      });
    });

    const search = document.getElementById('txtBusca');

    search.onkeyup = ({ target: { value } }) => {
      window.state = {
        ...window.state,
        filter: value,
      };
      renderList(page);
    };
  });

  return false;
};

//renderizar lista de favoritos
export const renderFav = (page) => {
  favAll().then(() => {
    renderFavList(page);
    var icon = document.getElementsByClassName('vi');
    Array.from(icon).forEach(function(element) {
      element.addEventListener('click', () => {
        const id = element.id;
        renderContact_info(id);
        return false;
      });
    });

    const search = document.getElementById('txtBusca');

    search.onkeyup = ({ target: { value } }) => {
      window.state = {
        ...window.state,
        filter: value,
      };
      renderFavList(page);
    };
  });

  return true;
};

//paginação
export const pagination = array => {
  let number_page = chunk(array, 10);
  let html = '';
  let pag = document.getElementById('page');
  pag.innerHTML = html;

  for (var i = 1; i <= number_page.length; i++) {
    html = `<a href="#" class="pages" id="${i - 1}">${i}</a>`;
    pag.innerHTML += html;
  }

  return 0;
};
