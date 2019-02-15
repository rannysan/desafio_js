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

function close() {
  var close = document.getElementById('close');

  close.addEventListener('click', () => {
    const aa = document.getElementById('root');
    aa.style.display = 'none';
  });
}
close();

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
