//selezioniamo il bottone "play"
const play = document.getElementById("play");
console.log(play);

//selezioniamo il container
const grid = document.getElementById("grid");
console.log(grid);


//aggiungiamo funzionamento al click
play.addEventListener("click", function () {

    //rendiamo visibile il container attribuendogli la classe active
    grid.classList.add("active");
    console.log(grid);

    //creiamo i 100 quadrati
    for (let i = 0; i < 100; i++) {
        const newSquare = createSquare();
        grid.append(newSquare);

        //aggiungiamo la classe .square ai quadrati
        newSquare.classList.add("square");

        //inseriamo il numer corrispondente al quadrato
        newSquare.append(i + 1);

        //aggiungiamo funzioni al click dei quadrati
        newSquare.addEventListener("click", function () {

            //aggiungiamo la classe .blue al quadrato cliccato
            colorSquare(newSquare, "blue");

            // visualizziamo il numero della casella selezionata nella console
            console.log("Numero casella selezionata:", i + 1);
        });
    }   
});






//FUNZIONI

//creazione quadrati
function createSquare() {
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    return newElement;
}

//aggiunta classe per colore
function colorSquare(element, color) {
    element.classList.add(color);  
}
