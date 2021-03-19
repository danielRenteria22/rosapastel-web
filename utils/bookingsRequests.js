async function getDayBookings(date) {
    body = {date}
    return await POST('booking/day',body)
}

async function getMonthBookings(date) {
    body = {date}
    return await POST('booking/month',body)
}

async function createForceBooking(formData) {
    return await POST_FORM_DATA('booking/create/force',formData)
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

async function changeStartTime(id,start_time){
    let body = {start_time}
    return PATCH(`booking/start/time/${id}`,body)
}

async function changeDuration(id,start_time,end_time){
    let body = {
        start_time,
        end_time
    }
    return PATCH(`booking/custom/duration/${id}`,body)
}