const totalValue = ()=> { 
const amount = +document.getElementById("amount").value;
const service = +document.getElementById("service").value;
const person = +document.getElementById("person").value;
const tip  = (amount*service)/person;
const total = (((amount*service)/person)+(amount/person));

if(amount=="" || isNaN(amount)){  
    alert("please select amount")
}
else if(service ==""){
    alert("please select service")
}
else if(person=="" || isNaN(person)){
    alert("please select person")
}
else{
    document.getElementById("tip").innerHTML= tip;
    document.getElementById("total").innerHTML= total;
}
}
const button = document.querySelector("button");
button.addEventListener("click", totalValue)