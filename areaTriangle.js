const unitValue = document.querySelectorAll(".area")
const submitBtn = document.querySelector("#submit-btn")
 const outputdisplay = document.querySelector('#output-of-triangle')

const Areaoftriangle = (base,height) => {

    const sum = ((base * height) *1/2)

    return sum;
}


const calculateAreaOfTriangle = () => {
 const sum = Areaoftriangle(Number(unitValue[0].value),Number(unitValue[1].value))
 const areaofTriangle = Math.sqrt(sum)
 outputdisplay.innerText = `area of triangle is: ${areaofTriangle}`
//  console.log(areaofTriangle);
}



submitBtn.addEventListener("click", calculateAreaOfTriangle )