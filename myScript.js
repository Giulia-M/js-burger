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
    var couponList = ["CAK2836HDYC", "EJWYDH763HD", "JSHDSU454ID"];
  
    var couponUtente = document.getElementById("coupon").value;
    //invoco la funzione 
    priceBurger.textContent = applyDiscount(couponUtente, couponList, amount, 0.2);

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





//funzione che mi applica lo sconto del 20%
function applyDiscount (couponClient, couponContainer, originalPrice, discount){
   
    var discountedPrice = originalPrice;

    for (var j= 0; j<couponContainer.length; j++) {
        
        if(couponClient === couponContainer[j]){
            discountedPrice = originalPrice * (1 - discount)
        }
    }


    return discountedPrice.toFixed(2);
}

/*
//è stato selezionato l'ingrediente? --> .checked
if (ingredient.checked) {
    //il value ti rilascia una stringa --> per questo motivo scrivo parseInt
    //il value legge il value ="5" dell'input
    amount += parseInt(ingredient.value)
}*/
