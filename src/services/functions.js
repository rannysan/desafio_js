import { getAll, favAll } from '../services/api_test';
import renderList from '../views/list';
import renderContact_info from '../views/contact_info';
import renderFavList from '../views/fav_list';
import chunk from 'lodash/chunk';
import findIndex from 'lodash/findIndex';
import renderNewCont from '..//views/new_cont';
import { Api } from './Api';

const api = new Api();

//renderizar lista completa
export const render = page => {
  let { pageNumber } = window.state;
  window.state = {
    ...window.state,
    pageNumber: page
  };

  //renderList(0);
  console.log('aki')
  const { contacts } = window.state;
  if (contacts == '') {
    console.log('aki2');
    getAll().then(() => {
      renderList(page);
      var icon = document.getElementsByClassName('vi');
      Array.from(icon).forEach(function(element) {
        element.addEventListener('click', () => {
          const id = element.parentElement.id;
          renderContact_info(id);
          return false;
        });
      });

      var del = document.getElementsByClassName('del');
      Array.from(del).forEach(function(element) {
        element.addEventListener('click', () => {
          const id = element.parentNode.id;
          removecont(id);
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
  } else {
    console.log('aki3');
    renderList(page);
    var icon = document.getElementsByClassName('vi');
    Array.from(icon).forEach(function(element) {
      element.addEventListener('click', () => {
        const id = element.parentElement.id;
        renderContact_info(id);
        return false;
      });
    });

    var del = document.getElementsByClassName('del');
      Array.from(del).forEach(function(element) {
        element.addEventListener('click', () => {
          const id = element.parentElement.id;
          removecont(id);
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
  }

  return false;
};

//renderizar lista de favoritos
export const renderFav = page => {
  favAll().then(() => {
    renderFavList(page);
    var icon = document.getElementsByClassName('vi');
    Array.from(icon).forEach(function(element) {
      element.addEventListener('click', () => {
        const id = element.parentElement.id;
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

//Aqui começo a lidar com o atualizar/inserir e excluir

let obj = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  isFavorite: false,
  company: '',
  avatar: '',
  address: '',
  phone: '',
  comments: '',
};

export const renderInsert = () => {
  renderNewCont(obj);
};

export const renderUpdate = id => {
  const res = api.requestID(id);
  console.log(res);
  // return res
  // .then(result => result.json())
  // .then(data => {

  // });
  renderNewCont(obj);
};

let insert = async(obj) => {

  let cont = ({
    "firstName": obj.firstName,
    "lastName": obj.lastName,
    "email": obj.email,
    "gender": obj.gender,
    "isFavorite": obj.isFavorite,
    "company": obj.company,
    "avatar": obj.avatar,
    "address": obj.adress,
    "phone": obj.phone,
    "comments": obj.comment
  });

  try{
    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts',
    {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(cont)
    }
    );
    if(res.status==200){
      console.log('Cadastrado com sucesso!');
      return true;
    }

  }catch(err){
    console.log('Erro: ' +err);
    return false;
  }
};

//Submit
export const submit_insert = () => {
  let form = document.getElementById('formComplete');
  let urlPic = document.getElementById('urlpic').value;
  let gender = document.getElementById('genForm').gender.value;
  let firstName = form.firstname.value;
  let email = form.mailInfo.value;
  let company = form.compInfo.value;
  let lastName = document.getElementById('lname').value;
  let adress = document.getElementById('adress').value;
  let phone = document.getElementById('phone').value;
  let comment = document.getElementById('comment').value;

  if (firstName != '') {
    obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      isFavorite: false,
      company: company,
      avatar: urlPic,
      address: adress,
      phone: phone,
      comments: comment,
    };
    console.log(obj);
    if(insert(obj)){
      console.log('cadastrado')
    }else{
      console.log('erro')
    }

  } else {
    alert('preencha os campos necessários');
  }
};


//remover
export const removecont = (proto_id) =>{
  console.log(proto_id);

  api.removeId(proto_id);
  let { contacts, favorites, pageNumber } = window.state;
  console.log();
  contacts.splice(findIndex(contacts, function(o) { return o.id == proto_id; }), 1);
  favorites.splice(findIndex(contacts, function(o) { return o.id == proto_id; }), 1);
  console.log(contacts);
  window.state = {
    ...window.state,
    contacts: contacts,
    favorites: favorites
  };
  render(pageNumber);
}
