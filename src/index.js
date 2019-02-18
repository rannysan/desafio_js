import './index.css';
import './css/cont.css';
import './css/insert.css';
import { render, renderFav} from './services/functions';
import renderNewCont from './views/new_cont';

let is_fav = false;
//inicialização
render(0);

//renderizar lista completa
let home = document.getElementById('home');
home.addEventListener('click', () => {
  is_fav = render(0);
});

//renderizar lista de favoritos
const fav = document.getElementById('favorite');
fav.addEventListener('click', () => {
  is_fav = renderFav(0);
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
  renderNewCont();
});

//Close
let close = document.getElementById('close');
close.addEventListener('click', () => {
  const aa = document.getElementById('root');
  aa.style.display = 'none';
});
