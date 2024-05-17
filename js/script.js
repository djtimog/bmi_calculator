const calculateBMI = () => {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    alert("please input a valid height and weight");
  }
  let heightMeter = height / 100;
  let bmi = weight / squareNumber(heightMeter);

  let result = `your BMI is ${bmi.toFixed(3)} <br>`;
  result += "Classification ";

  if (bmi < 18.5) {
    result += "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    result += "Normal Weight";
  } else if (bmi >= 25 && bmi < 30) {
    result += "OverWeight";
  } else {
    result += "Obese";
  }
  document.getElementById("result").innerHTML = result;
};

const squareNumber = (number) => {
  return number * number;
};
