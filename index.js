const button = document.querySelector('#btn');
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "" || people < 1){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter your information!',
          })
    }

    let amountPerPerson = bill/people;
    document.querySelector("#dividedBill").textContent = amountPerPerson.toFixed(2);

    let tipPerPerson = bill * tip / people;
    document.querySelector("#dividedTip").textContent = tipPerPerson.toFixed(2);

    let totalAmountPerPerson = amountPerPerson + tipPerPerson;
    document.querySelector("#dividedTotal").textContent = totalAmountPerPerson.toFixed(2);

    

}

