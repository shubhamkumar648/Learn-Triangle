const unitValue = document.querySelectorAll(".area")
const submitBtn = document.querySelector("#submit-btn")
 const outputdisplay = document.querySelector('#output-of-triangle')

const Areaoftriangle = (base,height) => {

    const sum = ((base * height) *1/2)
    
    outputdisplay.innerText = `area of triangle is: ${sum}`


}


const calculateAreaOfTriangle = () => {

   const input1 =  Number(unitValue[0].value)
    const input2 =  Number(unitValue[1].value)

if (input1 == "" || input2 == ""){

    outputdisplay.innerText="enter all value first"
}

else if (input1 < 0 && input2 < 0) {

    outputdisplay.innerText="enter positive value "

}
else {
    Areaoftriangle(input1,input2)
}}



submitBtn.addEventListener("click", calculateAreaOfTriangle )