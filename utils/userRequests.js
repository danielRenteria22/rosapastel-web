async function login(email,password) {
    let body = {
        email,
        password
    }
    return await POST('user/login',body)
}

async function createUser(name,email,password,is_admin) {
    let body = {
        name,
        email,
        password,
        is_admin
    }
    return await POST('user/create',body)
}

async function deleteUser(email) {
    let body = {email}
    return await DELETE('user/delete',body)
}

async function getAvailableUsers(start_time,service_id) {
    let body = {
        start_time,
        service_id
    }
    return await POST('user/available',body)
}

async function getAll() {
    return await GET('user/all')
}

async function getSchedules(userId) {
    return await GET(`user/schedule/${userId}`)
}

async function deleteSchedule(userId,scheduleId) {
    return await DELETE(`user/schedule/${userId}/${scheduleId}`,{})
}

async function setSchedules(userId,schedules) {
    let body = {
        schedules
    }
    return await PATCH(`user/schedule/${userId}`,body)
}