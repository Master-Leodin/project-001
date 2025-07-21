const changeName = document.querySelector(`button`);
const mySpan = document.getElementById(`yourName`);

changeName.onclick = function(){
    const putYourName = prompt("Enter Your Name:");
    mySpan.textContent = putYourName;
};