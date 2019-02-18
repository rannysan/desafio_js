export class Api {
  requestID(id){
    return fetch('http://contacts-api.azurewebsites.net/api/contacts/'+id)
  }

  removeId(id){
    return fetch('http://contacts-api.azurewebsites.net/api/contacts/'+id)
  }

  change(id){
    return fetch('http://contacts-api.azurewebsites.net/api/contacts/' + id)
  }
}
