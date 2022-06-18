
    var adresy = Array (
        "http://helion.pl/ksiazki/jscpk.htm" ,
        "http://helion.pl/ksiazki/cwjas2.htm" ,
        "http://helion.pl/ksiazki/joowww.htm"
    )


function onclickHandler(num) {
    if (num >= 0 && num < adresy.length) {
        location.assign(adresy[num]) ;
    }
}