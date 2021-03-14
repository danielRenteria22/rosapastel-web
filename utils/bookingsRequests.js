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