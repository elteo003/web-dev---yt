

/*

o creiamo una funzione 
che dentro prende gli ID degli altri due bottoni.
E di due bottoni li setta con la classe standard.
Mentre il bottone che ci interessa si "anima"

*/


function changeStatus(id1, id2, id3){

    document.getElementById(id1).classList.add("btn");
    document.getElementById(id2).classList.remove("btn");
    document.getElementById(id3).classList.remove("btn");


}