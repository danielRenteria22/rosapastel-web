function formatDate(date){
    var options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    return new Intl.DateTimeFormat('es-MX',options).format(new Date(date));
}

function formatSimpleDate(date){
    var options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
    };
    return new Intl.DateTimeFormat('es-MX',options).format(new Date(date));
}

function formatCalendarDate(date) {
    var options = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    letDateString =  Intl.DateTimeFormat('es-MX',options).format(date);
    let pieces = letDateString.split(' ')
    let datePieces = pieces[0].split('/')
    let timePieces = pieces[1].split(':')
    return `${datePieces[2]}-${to2DigitNumber(datePieces[1])}-${to2DigitNumber(datePieces[0])}T${timePieces[0]}:${timePieces[1]}:00${getOffset()}`
}

function to2DigitNumber(numerStr) {
    let number = parseInt(numerStr)
    if(number >= 10) return number
    return `0${number}`
}

function getOffset() {
    var date = new Date();
    var offset = date.getTimezoneOffset();
    let sign = offset >= 0? "-" : "+";
    let hours = formatTime(Math.floor(offset / 60));
    let minutes = formatTime(offset % 60)
    return `${sign}${hours}:${minutes}`
}

function formatTime(time) {
    if(time >= 10) return time
    return `0${time}`
}