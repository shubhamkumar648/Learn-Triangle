const input1 = document.querySelector("#side-one");
const input2 = document.querySelector("#side-two");
const outputEl = document.querySelector("#out-put");
const btnSubmit = document.querySelector("#check-answer");

const calculateSumofHypotneous = (num1, num2) => {
  const sum = (num1 * num1) + (num2 * num2);

  const lengthofHypotaneous = Math.sqrt(sum);

  outputEl.innerText = `the length of Hypotaneous ${lengthofHypotaneous}`;
};

const calculateHypotoneous = () => {
  var base = Number(input1.value);

  var height = Number(input2.value);

  if (base == "" || height == "") {
    outputEl.innerText = "please enter all value";
  } else if (base < 0 && height < 0) {
    outputEl.innerText = "please enter positive value";
  } else {
    calculateSumofHypotneous(base, height);
  }
};

btnSubmit.addEventListener("click", calculateHypotoneous);
