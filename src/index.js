import './index.css';
import './css/cont.css';
import renderList from './views/list';
import renderContact_info from './views/contact_info';
import renderFavList from './views/fav_list';

renderList().then(() => {
  var icon = document.getElementsByClassName('vi');
  Array.from(icon).forEach(function(element) {
    element.addEventListener('click', () => {
      const id = element.id;
      renderContact_info(id);
      return false;
    });
  });
  var starFav = document.getElementsByClassName('fav1');
  Array.from(starFav).forEach(function(element) {
    element.addEventListener('click', () => {
      let img = require('./images/starColor.png');
      console.log(element.src);
    });
  });
});

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
  renderList().then(() => {
    var icon = document.getElementsByClassName('vi');
    Array.from(icon).forEach(function(element) {
      element.addEventListener('click', () => {
        const id = element.id;
        renderContact_info(id);
        return false;
      });
    });
  });
});

var close = document.getElementById('close');
close.addEventListener('click', () => {
  const aa = document.getElementById('root');
  aa.style.display = 'none';
});

const favBtn = document.getElementById('favorite');
favBtn.addEventListener('click', () => {
  renderFavList().then(() => {
    var icon = document.getElementsByClassName('vi');
    Array.from(icon).forEach(function(element) {
      element.addEventListener('click', () => {
        const id = element.id;
        renderContact_info(id);
        return false;
      });
    });
  });
});

//ativar favoritos
