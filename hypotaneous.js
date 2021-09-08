const value1 = document.querySelector("#side-one")
const value2 = document.querySelector("#side-two")
const outputEl = document.querySelector("#out-put")
const btnSubmit = document.querySelector("#check-answer")

 const calculateSumofHypotneous = (num1,num2) => {

const sum = (num1*num1) + (num2*num2)
   return sum

 }


 const calculateHypotoneous = () => {

    const sum = calculateSumofHypotneous(Number(value1.value),Number(value2.value))
    const lengthofHypotaneous = Math.sqrt(sum)
    outputEl.innerText = `the length of Hypotaneous ${lengthofHypotaneous}`
 }

btnSubmit.addEventListener("click" , calculateHypotoneous)