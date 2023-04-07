// 1. Stabiliamo il prezzo del lavoro all'ora
// 1.1 collegare il prezzo al tipo di lavoro
// 2. Inserire i codici sconto del 25% e fare in modo di usarne solo una volta per codice
// 3. Quando si preme send viene fuori il prezzo finale del preventivo

const backEndPrice = 20.50;

const frontEndPrice = 15.30;

const projectAnalysisPrice = 33.60;

// Questi codici offrono uno sconto del 25%

const discountCode = ["YHDNU32","JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]; 

function onSubmitForm(event) {
    event.preventDefault();
    
    let selectedTypeWork = document.getElementById("work-type").value;
    
    console.log(selectedTypeWork);

    switch (selectedTypeWork) {
        case "backend":
            selectedTypeWork == backEndPrice;
            console.log(backEndPrice.toFixed(2) + "€" + " l'ora");
            break;
        case "frontend":
            selectedTypeWork == frontEndPrice;
            console.log(frontEndPrice.toFixed(2) + "€" + " l'ora");
            break;
        case "analysis":
            selectedTypeWork == projectAnalysisPrice;
            console.log(projectAnalysisPrice.toFixed(2) + "€" + " l'ora");
            break;
    }

    let inputHours = document.getElementById("hours").value;
    console.log(inputHours);

    if (isNaN(inputHours) || inputHours == "") {
        alert("Devi inserie un numero di ore");
    }

    if (selectedTypeWork == "backend") {
        let backEndFinalPrice = (backEndPrice * inputHours).toFixed(2);
        console.log(backEndFinalPrice);

    } else if (selectedTypeWork == "frontend") {
        let frontEndFinalPrice = (frontEndPrice * inputHours).toFixed(2);
        console.log(frontEndFinalPrice);

    } else {
        let projectAnalysisFinalPrice = (projectAnalysisPrice * inputHours).toFixed(2);
        console.log(projectAnalysisFinalPrice);
    }

    let discountCodeUser = document.getElementById("coupon").value;

    let isDiscountCodeAvailable = disocuntCode.includes(discountCodeUser);

    if (isDiscountCodeAvailable && selectedTypeWork == "backend") {
        let scountedPriceBackEnd = ((backEndPrice * inputHours) * 0.75).toFixed(2);

    }
  

}



