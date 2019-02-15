export class Api {
    request() {
        return fetch('http://contacts-api.azurewebsites.net/api/contacts?limit=10')
    }

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
