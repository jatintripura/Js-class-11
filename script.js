/*function getValue(){
    const nameInput=document.getElementById("full-name");
    const nameValue=nameInput.value;
    const erorText = document.getElementById("error-text");
   if(nameValue){
    console.log(nameValue);
    erorText.innerHTML=""; //empty string
    nameInput.value="";//empty string
   }
   else{
    erorText.innerHTML='<p class="text-danger">Please write your name </p>';
    //alert("Pease Enter your name");
   }
}

//and event listener

const submitButton= document.getElementById("submit-button");
console.log(submitButton);
submitButton.addEventListener("click",getValue);//onclick other option in index.

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email-adress");
  const fullAdressInput = document.getElementById("full-adress");
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const fullAdressValue = fullAdressInput.value;
  const erorText = document.getElementById("error-text");
  const formData = document.getElementById("form-data");
  if (nameValue && emailValue && fullAdressValue) {
    //console.log(nameValue,emailValue,fullAdressValue)
    formData.innerHTML = `<p> From sumited by ${nameValue}, Email Adress:${emailValue}, Full adress:${fullAdressValue}</p>`;
    //console.log(nameValue);
    erorText.innerHTML = ""; //empty string
    nameInput.value = ""; //empty string
    emailValue.value = "";
    fullAdressValue.value = "";
  } else {
    erorText.innerHTML =
      '<p class="text-danger">Please fill all input box </p>';
    formData.innerHTML = "";
    //alert("Pease Enter your name");
  }
});*/
const calculateBtn=document.getElementById("calculate-btn");
calculateBtn.addEventListener("click",function(){
  const income=document.getElementById("income").innerHTML;
  //console.log(income.innerHTML);
  const rentInput=document.getElementById("rent");
//console.log(rentInput.innerHTML);
const foodInput=document.getElementById("food");
//console.log( foodInput.innerHTML);
const utilitiesInput=document.getElementById("utilities");
//console.log(utilitiesInput.innerHTML);
const insuranceInput=document.getElementById("insurance");
//console.log(insuranceInput.innerHTML);
const expensesDiv=document.getElementById("expenses");
//console.log(expenses.innerHTML);
const balanceDiv=document.getElementById("balance");
const erorText = document.getElementById("error-text");
const formData = document.getElementById("form-data");
//console.log(expenses.innerHTML);
const incomeValue=parseFloat(income);
const rentValue=parseFloat(rentInput.value);
const foodValue=parseFloat(foodInput.value);
const utilitiesValue=parseFloat(utilitiesInput.value);
const insuranceValue=parseFloat(insuranceInput.value);
//console.log(incomeValue, rentValue,foodValue,utilitiesValue,insuranceValue);
const cost=rentValue+foodValue+utilitiesValue+insuranceValue;
const balance=incomeValue-cost;
//console.log(cost);
if(rentValue>=0&&foodValue>=0&&utilitiesValue>=0&&insuranceValue>=0){
  expensesDiv.innerHTML=cost;
  balanceDiv.innerHTML=balance;
  
  rentInput.value="";
  foodInput.value="";
  utilitiesInput.value="";
  insuranceInput.value="";
//console.log(cost,balance);
}else{
  erorText.innerHTML =
      '<p class="text-danger">Please fill all input box </p>';
    formData.innerHTML = "";
    //alert("Pease Enter your name");
}
//expensesDiv.innerHTML=cost;
//balanceDiv.innerHTML=balance;
//console.log(cost,balance);
})