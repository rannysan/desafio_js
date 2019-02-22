//verificar obrigatórias
export const verObrGeral = (string, id) => {
  const input = document.getElementById(id);
  if (string == '' || string.length < 3) {
    input.style.backgroundColor = '#ff000080';
    return false;
  } else {
    input.style.backgroundColor = 'white';
    return true;
  }
};
//verificar as outras
export const verNObr = (string, id) => {
  const input = document.getElementById(id);
  if (string.length < 3 && string.length != 0) {
    input.style.backgroundColor = '#ff000080';
    return false;
  }else{
    input.style.backgroundColor = 'white';
    return true;
  }
};

//verificar email
export const verEmail = (email) =>{
  const inputEmail = document.getElementById('email');
  let test;
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let verif = re.test(email);


  if(!verif || email == ''){
    inputEmail.style.backgroundColor = '#ff000080';
    return false;
  }else{
    inputEmail.style.backgroundColor = 'white';
     return true;
  }
}
