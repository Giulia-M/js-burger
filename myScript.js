var buttonElement = document.getElementById("button");
var nameBurger = document.getElementById("name");
var ingredientsList = document.querySelectorAll(".ingredient [type='checkbox']")

var priceBurger = document.getElementById("price")

buttonElement.addEventListener("click", function () {

    if (!nameBurger.value) {
        alert("Manca il nome del Burger")
    }

    var amount = 50;
    
    for (var i = 0; i < ingredientsList.length; i++) {
        var ingredient = ingredientsList[i];

        //uso la funzione 
        amount = addIngredient(amount, ingredient);

    }


    //lista di coupon
    var couponList = ["CAK2836HDYC", "EJWYDH763HD", "JSHDSU454ID"]
    
    var couponUtente = document.getElementById("coupon");

    var couponUtenteValue = couponUtente.value
    var elementExist = false;


    for (var j = 0; j < couponList.length; j++) {
        var singleCoupon = couponList[j];
        
        if(singleCoupon === couponUtenteValue) {
            elementExist = true;
        }
    }

    priceBurger.textContent = amount;

})



//funzione per avere la somma del prezzo, se viene selezionato un nuovo ingrediente 
function addIngredient(totalAmount, singleIngredient) {
    //è stato selezionato l'ingrediente? --> .checked
    if (singleIngredient.checked) {
        //il value ti rilascia una stringa --> per questo motivo scrivo parseInt
        //il value legge (es. value ="5") dell'input
        totalAmount += parseInt(singleIngredient.value);
    }
    return totalAmount
}



//funzione che mi dia come risultato il prezzo del burger in base allo sconto 
function discountCoupon(voucherUtente, voucherList) {
    var esito;
    var prezzoScontato = prezzoTotale - sconto
    
    if(voucherList === voucherUtente) {
       
        
    }
}


/*
//è stato selezionato l'ingrediente? --> .checked
if (ingredient.checked) {
    //il value ti rilascia una stringa --> per questo motivo scrivo parseInt
    //il value legge il value ="5" dell'input
    amount += parseInt(ingredient.value)
}*/
