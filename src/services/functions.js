/* eslint-disable no-undef */
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
  window.state = {
    ...window.state,
    pageNumber: page
  };

  //renderList(0);
  const { contacts } = window.state;
  if (contacts == '') {
    getAll().then(() => {
      renderList(page);
      const icon = document.getElementsByClassName('vi');
      Array.from(icon).forEach(function(element) {
        element.addEventListener('click', () => {
          const id = element.parentElement.id;
          renderContact_info(id);
          return false;
        });
      });

      const del = document.getElementsByClassName('del');
      Array.from(del).forEach(function(element) {
        element.addEventListener('click', () => {
          const id = element.parentNode.id;
          confirm(id);
          return false;
        });
      });

      const favsArray = document.getElementsByClassName('fav1');
      Array.from(favsArray).forEach(function(element) {
        element.addEventListener('click', () => {
          if(element.className == 'icon fav1 isfavOn'){
            element.src = require('../images/starBlack.png');
            element.className = 'icon fav1 isfavOff';
            favorite(element.id);
          }else if(element.className == 'icon fav1 isfavOff'){
            element.src = require('../images/starColor.png');
            element.className = 'icon fav1 isfavOn';
            favorite(element.id);
            console.log(element.id)
          }
        });
      });

    });
  } else {
    renderList(page);
    const icon = document.getElementsByClassName('vi');
    Array.from(icon).forEach(function(element) {
      element.addEventListener('click', () => {
        const id = element.parentElement.id;
        renderContact_info(id);
        return false;
      });
    });

    const del = document.getElementsByClassName('del');
      Array.from(del).forEach(function(element) {
        element.addEventListener('click', () => {
          const id = element.parentElement.id;
          confirm(id);
          return false;
        });
      });

      const favsArray = document.getElementsByClassName('fav1');
      Array.from(favsArray).forEach(function(element) {
        element.addEventListener('click', () => {
          if(element.className == 'icon fav1 isfavOn'){
            element.src = require('../images/starBlack.png');
            element.className = 'icon fav1 isfavOff';
            favorite(element.id);
          }else if(element.className == 'icon fav1 isfavOff'){
            element.src = require('../images/starColor.png');
            element.className = 'icon fav1 isfavOn';
            favorite(element.id);
          }
        });
      });
  }

  return false;
};

//renderizar lista de favoritos
export const renderFav = page => {
  favAll().then(() => {
    renderFavList(page);
    const icon = document.getElementsByClassName('vi');
    Array.from(icon).forEach(function(element) {
      element.addEventListener('click', () => {
        const id = element.parentElement.id;
        renderContact_info(id);
        return false;
      });
    });

    const favsArray = document.getElementsByClassName('fav1');
      Array.from(favsArray).forEach(function(element) {
        element.addEventListener('click', () => {
          if(element.className == 'icon fav1 isfavOn'){
            element.src = require('../images/starBlack.png');
            element.className = 'icon fav1 isfavOff';
            favorite(element.id);
          }else if(element.className == 'icon fav1 isfavOff'){
            element.src = require('../images/starColor.png');
            element.className = 'icon fav1 isfavOn';
            favorite(element.id);
            console.log(element.id)
          }
        });
      });

      const del = document.getElementsByClassName('del');
      Array.from(del).forEach(function(element) {
        element.addEventListener('click', () => {
          const id = element.parentNode.id;
          confirm(id);
          return false;
        });
      });
  });

  return true;
};

//paginação
export const pagination = (array, page) => {
  if(page != 'page'){
    const number_page = chunk(array, 10);
    let html = '';
    const pag = document.getElementById('page');
    pag.innerHTML = html;
    let i = page;
    i++;
    const limit = i + 2;

      if(i < 3){
        i = 1;
      }else{
        i -= 2;
      }

      pag.innerHTML += `<a href="#" class="pages" id="0">Inicio</a>`;
      for (i ; i <= limit; i++) {
        if(i != number_page.length){
          html = `<a href="#" class="pages" id="${i - 1}">${i}</a>`;
          pag.innerHTML += html;
        }else{
          break;
        }
      }

        pag.innerHTML += `<a href="#" class="pages" id="${number_page.length - 1}">Fim</a>`;
        document.getElementById(page).style.backgroundColor = '#694b91';
    }


  return 0;
};

//Aqui começo a lidar com o atualizar/inserir e excluir

const obj_init = {
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
  renderNewCont(obj_init);
};

export const renderUpdate = id => {
  const res = api.requestID(id);
  console.log(res);
  renderNewCont(obj);
};

const insert = async(obj) => {

  const cont = ({
    "firstName": obj.firstName,
    "lastName": obj.lastName,
    "email": obj.email,
    "gender": obj.gender,
    "isFavorite": obj.isFavorite,
    "company": obj.company,
    "avatar": obj.avatar,
    "address": obj.address,
    "phone": obj.phone,
    "comments": obj.comments
  });

  try{
    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts',
    {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(cont)
    }
    );
    if(res.status==201){
      console.log('Cadastrado com sucesso!');

      window.state = {
        ...window.state,
        contacts: ''
      }

      render(0);
      document.getElementById('root').style.display = 'none';
      alertSucess('Cadastrado com sucesso!');
      return true;
    }
    else if(res.status==400){
      alert('Preencha os campos corretamente!');
      return true;
    }

  }catch(err){
    console.error('Erro: ' +err);
    return false;
  }
};

//Submit
export const submit_insert = (isfav) => {
  const form = document.getElementById('formComplete');
  let urlPic = document.getElementById('urlpic').value;
  const gender = document.getElementById('genForm').gender.value;
  const firstName = form.firstname.value;
  const email = form.mailInfo.value;
  const company = form.compInfo.value;
  const favorite = isfav;
  const lastName = document.getElementById('lname').value;
  let adress = document.getElementById('adress').value;
  let phone = document.getElementById('phone').value;
  let comment = document.getElementById('comment').value;
  if(adress == ''){
    adress = null;
  }
  if(phone == ''){
    phone = null;
  }
  if(comment){
    comment = null;
  }
  if(urlPic == ''){
    urlPic = null;
  }


  if (firstName == '' || lastName == '' || company == '') {

    alert('preencha os campos necessários');

  } else {
    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      isFavorite: favorite,
      company: company,
      avatar: urlPic,
      address: adress,
      phone: phone,
      comments: comment,
    };

    if(insert(obj)){
      console.log('cadastrado')
    }else{
      console.log('erro')
    }
  }
};


//remover
export const removecont = (proto_id) =>{
  api.removeId(proto_id);
  const { contacts, favorites, pageNumber } = window.state;
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


//alerta e confirmação
export const confirm = (id) =>{
  const div_alert = document.getElementById('alert');
  let html = ``;
  div_alert.innerHTML = html;
  html = `
    <h3> Você realmente deseja excluir?</h1>
    <input class="btn" id="yes" type="button" value="Sim">
    <input class="btn" id="no" type="button" value="Nao">
  `;

  div_alert.innerHTML = html;
  div_alert.style.display = 'block';
  div_alert.focus();

  const btn_yes = document.getElementById('yes');
  btn_yes.addEventListener('click', () =>{
    div_alert.style.display = 'none';
    removecont(id);
    return true;
  });
  const btn_no = document.getElementById('no');
  btn_no.addEventListener('click', () =>{
    div_alert.style.display = 'none';
  });
}

export const alertSucess = (string) =>{
  const alert = document.getElementById('alert');
      let html = ``;
      alert.innerHTML = html;
      html = `
        <h2>${string}</h2>
        <input class="btn" id="closeAlert" type="button" value="Fechar">
      `;

      alert.innerHTML = html;
      alert.style.display = 'block';
      alert.focus();

    const btn= document.getElementById('closeAlert');
    btn.addEventListener('click', () =>{
    alert.style.display = 'none';
  });
}


//atualizar contato
export const update = async(obj, id) => {

  const cont = ({
    "firstName": obj.firstName,
    "lastName": obj.lastName,
    "email": obj.email,
    "gender": obj.gender,
    "isFavorite": obj.isFavorite,
    "company": obj.company,
    "avatar": obj.avatar,
    "address": obj.address,
    "phone": obj.phone,
    "comments": obj.comments
  });

  try{
    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts/' + id ,
    {
      method: 'PUT',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(cont)
    }
    );
    if(res.status==200){
      console.log('Atualizado com sucesso!');

      window.state = {
        ...window.state,
        contacts: ''
      }
      render(0);
      document.getElementById('root').style.display = 'none';
      alertSucess('Atualizado com sucesso!');
      return true;
    }
    else if(res.status==400){
      alert('Preencha os campos corretamente!');
      return true;
    }

  }catch(err){
    console.error('Erro: ' +err);
    return false;
  }
};

export const submit_update = (id, isfav) => {

  const form = document.getElementById('formComplete');
  let urlPic;
  if(document.getElementById('urlpic').value == ''){
    urlPic = document.getElementById('urlpic').src;
  }else{
    urlPic = document.getElementById('urlpic').value;
  }
  const gender = document.getElementById('genForm').gender.value;
  const firstName = form.firstname.value;
  const email = form.mailInfo.value;
  const company = form.compInfo.value;
  const lastName = document.getElementById('lname').value;
  let favorite = isfav;
  let adress = document.getElementById('adress').value;
  let phone = document.getElementById('phone').value;
  let comment = document.getElementById('comment').value;
  if(adress == ''){
    adress = null;
  }
  if(phone == ''){
    phone = null;
  }
  if(comment){
    comment = null;
  }
  if(urlPic == ''){
    urlPic = null;
  }



  if (firstName == '' || lastName == '' || adress == '' || phone == '' || company == '') {

    alert('preencha os campos necessários');

  } else {
    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      isFavorite: favorite,
      company: company,
      avatar: urlPic,
      address: adress,
      phone: phone,
      comments: comment,
    };

    if(update(obj, id)){
      console.log('atualizado')
    }else{
      console.log('erro')
    }
  }
};

//Fovoritos

export const favorite = (name) =>{
  const {contacts} = window.state;
  const end = findIndex(contacts, function(o) { return o.firstName == name; });
  let fav;
  if(contacts[end].isFavorite){
    fav = false;
  }else{
    fav = true;
  }

  const obj = {
    firstName: contacts[end].firstName,
    lastName: contacts[end].lastName,
    email: contacts[end].email,
    gender: contacts[end].gender,
    isFavorite: fav,
    company: contacts[end].info.company,
    avatar: contacts[end].info.avatar,
    address: contacts[end].info.address,
    phone: contacts[end].info.phone,
    comments: contacts[end].info.comments
  };
  update(obj, contacts[end].id);
}

//Buscar
export const contSearch = () =>{
  const search = document.getElementById('txtBusca');
  const div_result = document.getElementById('results');
  const { contacts } = window.state;
  const txt = (search.value).toLowerCase();
  div_result.innerHTML = '';
  let searchResults=[];
  searchResults=contacts.filter(c => new RegExp(txt, 'ig').test(`${c.firstName} ${c.lastName}`.toLowerCase()));

  for(let i = 0; i <searchResults.length; i++){
    const cont = document.createElement('li');

    cont.innerHTML=`<img src="${searchResults[i].info.avatar}" width='60px' height='60px'/> ${searchResults[i].firstName} ${searchResults[i].lastName}`

    cont.addEventListener('click', () =>{
      renderContact_info(searchResults[i].id);
    })
    div_result.appendChild(cont);
  }


}
