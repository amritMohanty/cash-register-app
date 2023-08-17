const billAmount = document.querySelector("#bill-amount")
const cashAmount = document.querySelector('#cash-amount')
const checkButton = document.querySelector('#button-check')
const message = document.querySelector('#message')

checkButton.addEventListener("click", function validateProcess(){
    message.style.display="none"

    if(cashAmount.value>=0 && billAmount.value>=0){
        if(cashAmount.value>=billAmount.value){
            showMessage("will do")
        }
        else{
            showMessage("insufficient cash")
        }
    }
    else{
        showMessage("invalid")
    }
})

function showMessage(msg){
    message.style.display = "block"
    message.innerHTML = msg
}

