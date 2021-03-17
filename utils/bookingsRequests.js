async function getDayBookings(date) {
    body = {date}
    return await POST('booking/day',body)
}

async function getMonthBookings(date) {
    body = {date}
    return await POST('booking/month',body)
}

async function createForceBooking(start_time,service_id,user_id,name,phone) {
    let body = {
        start_time,
        service_id,
        user_id,
        name,
        phone,
        'sms': '',
        'code': ''
    }

    return await POST('booking/create/force',body)
}

async function createBooking(start_time,service_id,user_id,name,phone,sms_id,code) {
    let body = {
        start_time,
        service_id,
        user_id,
        name,
        phone,
        sms_id,
        code
    }

    return await POST('booking/create',body)
}

async function deleteBooking(id) {
    return await DELETE(`booking/${id}`)
}

async function getUnAvailableIntervals(date) {
    let body = { date }
    return await POST('booking/intervals',body)
}