//get the element for sum of triangle

//since we have using class and name is same in tag so we use (querselectorAll)with dot(.)notaion
const inputs = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-btn");
const OutputEL = document.querySelector("#text-Display");

 const calculateSumofTriangle = (angle1, angle2, angle3) => {

   const sumOfAngles = angle1 + angle2 + angle3;
   
   return sumOfAngles;

};

const isTriangle = () => {

  console.log(inputs[0].value,inputs[1].value,inputs[2].value);
  let sumOfAngles = calculateSumofTriangle(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if(sumOfAngles === 180) {
    // console.log("yes its is form");
    OutputEL.innerText = "yes it form  a triangle";
  } else {
    // console.log("no its is form");

    OutputEL.innerText = "oops it is not form a triangle";
  }
};

checkButton.addEventListener("click", isTriangle);
