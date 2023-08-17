const billAmount = document.querySelector("#bill-amount")
const cashAmount = document.querySelector('#cash-amount')
const checkButton = document.querySelector('#button-check')
const message = document.querySelector('#message')
const noOfNotes = document.querySelectorAll(".notes")

const availableDenominations = [2000,500,100,20,10,5,1]

checkButton.addEventListener("click", function validateProcess(){
    message.style.display="none"

    if(cashAmount.value>=0 && billAmount.value>=0){
        if(cashAmount.value >= billAmount.value){
            // showMessage("will do")
            const amountToBeReturned = cashAmount.value - billAmount.value;
            calculateChange(amountToBeReturned)
        }
        else{
            showMessage("Insufficient cash")
        }
    }
    else{
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

