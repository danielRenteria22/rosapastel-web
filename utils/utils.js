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
    return `${datePieces[2]}-${to2DigitNumber(datePieces[1])}-${to2DigitNumber(datePieces[0])}T${timePieces[0]}:${timePieces[1]}:00-07:00`
}

function to2DigitNumber(numerStr) {
    let number = parseInt(numerStr)
    if(number >= 10) return number
    return `0${number}`
}