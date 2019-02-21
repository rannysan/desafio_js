import './index.css';
import './css/cont.css';
import './css/insert.css';
import {
  render,
  renderFav,
  contSearch,
  renderInsert,
} from './services/functions';

let is_fav = '';
let aLength = localStorage.length;
let aKey;

if (is_fav == '') {
  is_fav = false;
  for (let i = 0; i <= aLength; i++) {
    aKey = localStorage.key(i);
    if (aKey == 'favOn') {
      break;
    } else if (i == aLength) {
      localStorage['favOn'] = JSON.stringify(is_fav);
    }
  }
}

if (JSON.parse(localStorage['favOn'])) {
  renderFav(0);
} else {
  render(0);
}

//renderizar lista completa
let home = document.getElementById('home');
home.addEventListener('click', () => {
  is_fav = render(0);
  localStorage['favOn'] = JSON.stringify(is_fav);
});

//renderizar lista de favoritos
const fav = document.getElementById('favorite');
fav.addEventListener('click', () => {
  is_fav = renderFav(0);
  localStorage['favOn'] = JSON.stringify(is_fav);
});

//pegar numero de pagina e trocar pagina
let page_list = document.getElementById('page');
page_list.addEventListener('click', function(e) {
  if (is_fav) {
    renderFav(e.target.id);
  } else {
    render(e.target.id);
  }
});

//Inserir novo contato
let insert = document.getElementById('insert');
insert.addEventListener('click', () => {
  const root = document.getElementById('root');
  renderInsert();
});

//Close
let close = document.getElementById('close');
close.addEventListener('click', () => {
  const aa = document.getElementById('root');
  aa.style.display = 'none';
});

//buscar
const search = document.getElementById('txtBusca');
search.onfocus = () => {
  const div_result = document.getElementById('results');
  div_result.style.display = 'block';
  contSearch();
};
search.onkeyup = () => {
  contSearch();
};
search.onblur = () => {
  setTimeout(function() {
    const div_result = document.getElementById('results');
    const search = document.getElementById('txtBusca');
    search.value = '';
    div_result.style.display = 'none';
  }, 200);
};
