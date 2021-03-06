function getBaseUrl() {
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "") {
        return 'http://127.0.0.1:5000' 
    } else {
        return 'https://rosapastel-api.herokuapp.com'
    }
}

async function GET(endPoint){
    let baseUrl = getBaseUrl()
    response = await fetch(`${baseUrl}/${endPoint}`, {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
          }
    })
    body = await response.json()
    return body
}

async function requestWithBody(method,endPoint,body) {
    let baseUrl = getBaseUrl()
    response = await fetch(`${baseUrl}/${endPoint}`, {
        method: method, 
        body: JSON.stringify(body),
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
        }
      })

      data = response.json()
      return data
}

async function requestWithFormData(method,endPoint,formData) {
    let baseUrl = getBaseUrl() 
    response = await fetch(`${baseUrl}/${endPoint}`, {
        method: method, 
        body: formData,
        headers:{
        //   'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${getAuthToken()}`
        }
      })

      data = response.json()
      return data
}

async function POST_FORM_DATA(endPoint,formData) {
    return await requestWithFormData('POST',endPoint,formData)
}

async function POST(endPoint,body){
    return await requestWithBody('POST',endPoint,body)
}

async function DELETE(endPoint,body){
    return await requestWithBody('DELETE',endPoint,body)
}

async function PATCH(endPoint,body){
    return await requestWithBody('PATCH',endPoint,body)
}

let authTokenKey = "authToken";

function getAuthToken() {
    let token = localStorage.getItem(authTokenKey)
    if (token === null) {
        token = ""
    }
    return token
}

function saveToken(token) {
    localStorage.setItem(authTokenKey,token)
}




