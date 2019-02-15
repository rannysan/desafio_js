window.state = {
  loading: true,
  filter: '',
  contacts: []
}

const getAll = async () => {
  const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts')
  const data = await res.json();
  window.state = {
      ...window.state,
      contacts: data,
      loading: false
  }
}

export default getAll;
