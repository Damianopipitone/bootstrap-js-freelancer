// 1. Stabiliamo il prezzo del lavoro all'ora
// 1.1 collegare il prezzo al tipo di lavoro
// 2. Inserire i codici sconto del 25% e fare in modo di usarne solo una volta per codice
// 3. Quando si preme send viene fuori il prezzo finale del preventivo

const backEndPrice = 20.50;

const frontEndPrice = 15.30;

const projectAnalysisPrice = 33.60;

function onSubmitForm(event) {
    event.preventDefault();
    
    let selectedTypeWork = document.getElementById("work-type").value;
    
    console.log(selectedTypeWork);

    switch (selectedTypeWork) {
        case "backend":
            console.log(backEndPrice.toFixed(2) + "€" + " l'ora");
            break;
        case "frontend":
            console.log(frontEndPrice.toFixed(2));
            break;
        case "analysis":
            console.log(projectAnalysisPrice.toFixed(2));
            break;
    }

    let inputHours = document.getElementById("hours").value;
    console.log(inputHours);

    if (isNaN(inputHours) || inputHours == "") {
        alert("Devi inserie un numero di ore");
    }

}


