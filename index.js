const button = document.querySelector('#btn');
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === ""){
        alert("error")
    }

    let amountPerPerson = bill/people;
    let tipPerPerson = bill * tip / people
    let totalAmountPerPerson = amountPerPerson + tipPerPerson;

}

