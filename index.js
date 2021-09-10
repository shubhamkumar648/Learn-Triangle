//get the element for sum of triangle

//since we have using class and name is same in tag so we use (querselectorAll)with dot(.)notaion
const inputs = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-btn");
const OutputEL = document.querySelector("#text-Display");

const calculateSumofTriangle = (angle1, angle2, angle3) => {

  const sumOfAngles = angle1 + angle2 + angle3;

  if (sumOfAngles === 180) {
    // console.log("yes its is form");
    OutputEL.innerText = "yes it form  a triangle";
  } else {
    OutputEL.innerText = "no it is not form a triangle";
  }
}


const isTriangle = () => {
  //console.log(inputs[0].value,inputs[1].value,inputs[2].value);
  
    var angle1 =Number(inputs[0].value)
    var angle2 =Number(inputs[1].value) 
    var angle3 =Number(inputs[2].value)

    //set check for empty string
  
  if( angle1 == "" || angle2 == "" || angle3 == "")
{

  OutputEL.innerText = "please enter all the value";

}

 else if( angle1 <0 || angle2<0 || angle3 < 0)
{
    OutputEL.innerText = "please enter positive value";
  }
   else {
    
    calculateSumofTriangle(angle1,angle2,angle3)

   }
};

checkButton.addEventListener("click", isTriangle);
