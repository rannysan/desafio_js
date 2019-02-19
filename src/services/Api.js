export class Api {
  requestID(id) {
    return fetch('http://contacts-api.azurewebsites.net/api/contacts/' + id);
  }

  async removeId(id) {
    try {
      const res = await fetch(
        'http://contacts-api.azurewebsites.net/api/contacts/' + id,
        {
          method: 'DELETE',
          headers: new Headers(),
        }
      );
      if (res.status == 200) {
        console.log('excluido');
        return true;
      }
    } catch (err) {
      console.log('Erro: ' + err);
      return false;
    }
  }

  change(id) {
    return fetch('http://contacts-api.azurewebsites.net/api/contacts/' + id);
  }
}
