window.state = {
  loading: true,
  filter: '',
  contacts: [],
  favorites: [],
  pageNumber: ''
};

export const getAll = async () => {
  const res = await fetch(
    'http://contacts-api.azurewebsites.net/api/contacts'
  );
  const data = await res.json();
  window.state = {
    ...window.state,
    contacts: data,
    loading: false,
  };
};

export const favAll = async () => {
  const { contacts } = window.state;
  const array = [];

  if(contacts != ''){
    await Array.from(contacts).forEach(function(element) {
      if (element.isFavorite) {
        array.push(element);
      }
    });
    localStorage.setItem("favList", JSON.stringify(array));
  }



  const a = JSON.parse(localStorage.favList);

  window.state = {
    ...window.state,
    favorites: a,
  };
};

