let num1 = 5
let num2 = 10
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let ans=document.getElementById("ans")

function sum(){
    let result=num1+num2

    ans.textContent="sum:"+result
}

function sub(){
    let result=num1-num2

    ans.textContent="sum:"+result
}

function multiply(){
    let result=num1*num2

    ans.textContent="sum:"+result
}

function divide(){
    let result=num2/num1

    ans.textContent="sum:"+result
}


