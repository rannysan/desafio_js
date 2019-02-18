window.state = {
  loading: true,
  filter: '',
  contacts: [],
  favorites: []
};

export const getAll = async () => {
  const res = await fetch(
    'http://contacts-api.azurewebsites.net/api/contacts?=25'
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
  let array = [];

  await Array.from(contacts).forEach(function(element) {
    if (element.isFavorite) {
      array.push(element);
    }
  });
  window.state = {
    ...window.state,
    favorites: array,
  };
};

