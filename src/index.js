import './index.css';
import './css/cont.css';
import './css/insert.css';
import {
  render,
  renderFav,
  submit_insert,
  renderInsert,
} from './services/functions';


let is_fav = false;
console.log(JSON.parse(localStorage['favOn']));
//inicialização
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

  //botão cancelar
  const cancel = document.getElementById('cancel');
  cancel.addEventListener('click', () => {
    const div = document.getElementById('root');
    div.style.display = 'none';
  });

  //botão para carregar foto
  const car = document.getElementById('pic_car');
  car.addEventListener('click', () => {
    const pic = document.getElementById('contPic');
    const url = document.getElementById('urlpic');
    pic.src = url.value;
  });

  //dar submit
  const sub = document.getElementById('submit');
  sub.addEventListener('click', () => {
    submit_insert();
  });
});

//Close
let close = document.getElementById('close');
close.addEventListener('click', () => {
  const aa = document.getElementById('root');
  aa.style.display = 'none';
});
