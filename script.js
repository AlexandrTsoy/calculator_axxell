document.getElementById("calculate-button").addEventListener("click", function() {
  let weight = parseFloat(document.getElementById("weight-input").value.replace(",", "."));
  let height = parseFloat(document.getElementById("height-input").value.replace(",", "."));

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    let bmi = weight / (height * height);
    let resultText = "Your BMI is: " + bmi.toFixed(2);

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = '<div id="result-text">' + resultText + '</div>';

    let classification = "";
    if (bmi <= 18.5) {
      classification = "You are in the underweight zone.";
      resultElement.innerHTML += '<div class="low level">' + classification + '</div>';
    } else if (bmi <= 24.9) {
      classification = "You are in the normal weight zone.";
      resultElement.innerHTML += '<div class="medium level">' + classification + '</div>';
    } else if (bmi <= 29.9) {
      classification = "You are in the overweight zone.";
      resultElement.innerHTML += '<div class="high level">' + classification + '</div>';
    } else {
      classification = "You are in the obesity zone.";
      resultElement.innerHTML += '<div class="obese level">' + classification + '</div>';
    }
  } else {
    alert("Please enter correct data for weight and height.");
  }
});