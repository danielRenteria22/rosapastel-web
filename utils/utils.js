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