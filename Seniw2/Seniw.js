function Przelicz() {
    if (document.calc.liczba.value == "") {
        alert ('Wprowadz dane do przeliczenia!') ;
        return false ;
    }
var argument = document.calc.liczba.value ;
var typ_konwersji = document.calc.konwersja.value ;
if (typ_konwersji == "km2m") {
    document.calc.wynik.value = argument / 1.609 + "mil" ;
}
if (typ_konwersji == 'm2km') {
    document.calc.wynik.value = Math.round(argument * 1,609) + "km" ; 
}
if (typ_konwersji == "cm2in") {
    document.calc.wynik.value = argument / 2.54 + "cali" ;
}
if (typ_konwersji == "in2cm") {
    document.calc.wynik.value = Math.round(argument * 2.54) + "centymetry" ; 
}
if (typ_konwersji == "ft2m") {
    document.calc.wynik.value = argument / 0.3048 + "m" ;
}
if (typ_konwersji == "m2ft") {
    document.calc.wynik.value = Math.round(argument * 0.3048) + "stopy" ; 
}
if (typ_konwersji == "l2g") {
    document.calc.wynik.value = argument / 3.758 + "galony" ;
}
if (typ_konwersji == "g2l") {
    document.calc.wynik.value = Math.round(argument * 3.758) + "litry" ; 
}
if (typ_konwersji == "p2kg") {
    document.calc.wynik.value = argument / 2.20 + "kilogramy" ;
}
if (typ_konwersji == "kg2p") {
    document.calc.wynik.value = Math.round(argument * 2.20) + "funty" ; 
}

}