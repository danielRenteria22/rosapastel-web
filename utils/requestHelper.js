let baseUrl = 'http://127.0.0.1:5000'

async function GET(endPoint){
    response = await fetch(`${baseUrl}/${endPoint}`)
    body = await response.json()
    return body
}

async function requestWithBody(method,endPoint,body) {
    response = await fetch(`${baseUrl}/${endPoint}`, {
        method: method, 
        body: JSON.stringify(body), 
        headers:{
          'Content-Type': 'application/json'
        }
      })

      data = response.json()
      return data
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




