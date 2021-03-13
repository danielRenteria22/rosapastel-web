async function createService(name,price,duration) {
    let body = {
        name,
        price,
        duration
    }

    return await POST('service/create',body)
}

async function getAllServices() {
    return await GET('service/all')
}

async function deleteService(id) {
    return await DELETE(`service/${id}`)
}

async function updateService(id,name,price,duration) {
    let body = {
        name,
        price,
        duration
    }
    return await PATCH(`service/${id}`,body)
}