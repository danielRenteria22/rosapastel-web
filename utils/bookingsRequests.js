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

async function createBooking(formData) {
    return await POST_FORM_DATA('booking/create',formData)
}

async function deleteBooking(id) {
    return await DELETE(`booking/${id}`)
}

async function getUnAvailableIntervals(date) {
    let body = { date }
    return await POST('booking/intervals',body)
}