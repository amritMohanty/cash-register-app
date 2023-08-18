const billAmount = document.querySelector("#bill-amount")
const cashAmount = document.querySelector('#cash-amount')
const cashLabel = document.querySelector('label[for="cash-amount"]')
const checkButton = document.querySelector('#button-check')
const message = document.querySelector('#message')
const noOfNotes = document.querySelectorAll(".notes")
const table = document.querySelector("#cash-table")

const availableDenominations = [2000,500,100,20,10,5,1]

hideElement(cashAmount)
hideElement(cashLabel)
hideElement(table)

checkButton.addEventListener("click", function validateProcess(){
    message.style.display="none"

    if(billAmount.value>0){

        showElement(cashAmount)
        showElement(cashLabel)
        checkButton.innerHTML = "Return Change"

        if(cashAmount.value >= billAmount.value && cashAmount.value.typeof != "string"){
            // showMessage("will do")
            const amountToBeReturned = cashAmount.value - billAmount.value;
            calculateChange(amountToBeReturned)
            showElement(table)
        }
        else{
            if(cashAmount.value == "") showMessage("Waiting for cash input....")
            else showMessage("Invalid Amount")
        }
    }
    else{
        billAmount.amount
        showMessage("Please input valid positive amounts ONLY")
    }
})

function calculateChange(amountToBeReturned){
    for(let i=0; i < availableDenominations.length ;i++){
        noOfNotes[i].innerHTML = Math.trunc(amountToBeReturned/availableDenominations[i])
        amountToBeReturned %= availableDenominations[i]
    }

}

function showMessage(msg){
    message.style.display = "block"
    message.innerHTML = msg
}

function showElement(element){
    element.style.display = "block"
}
function hideElement(element){
    element.style.display = "none"
}

