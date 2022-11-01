const root_theme = document.querySelector(":root");
const btn = document.querySelector(".on");
const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".result");
var numberofSign = 0;
var lastadd = "";
var operationResult = 0;
var operationResultEqual = 0;

btn.addEventListener("click", () => {
  if (!btn.classList.contains("off")) {
    result.classList.remove("hide");
    result.textContent = "0";
    root_theme.style.setProperty("--off-col", "white");
    btn.classList.add("off");
    btn.textContent = "TURN OFF CALCULATOR";
  } else {
    root_theme.style.setProperty("--off-col", "rgb(70, 65, 65)");
    btn.classList.remove("off");
    result.classList.add("hide");

    btn.textContent = "TURN ON CALCULATOR";
  }
});

const clearAll = () => {
  result.textContent = "0";
  numberofSign = 0;
};

const doMathfromEqual = (numandoperEqual) => {
  numberofSign = 0;
  if (numandoperEqual.includes(" + ")) {
    var arrEqual = numandoperEqual.split(" + ");
    operationResultEqual = parseInt(arrEqual[0]) + parseInt(arrEqual[1]);
    result.textContent = operationResultEqual;
  }

  if (numandoperEqual.includes(" - ")) {
    var arrEqual = numandoperEqual.split(" - ");
    operationResultEqual = parseInt(arrEqual[0]) - parseInt(arrEqual[1]);
    result.textContent = operationResultEqual;
  }
  if (numandoperEqual.includes(" * ")) {
    var arrEqual = numandoperEqual.split(" * ");
    operationResultEqual = parseInt(arrEqual[0]) * parseInt(arrEqual[1]);
    result.textContent = operationResultEqual;
  }

  if (numandoperEqual.includes(" / ")) {
    var arrEqual = numandoperEqual.split(" / ");
    operationResultEqual = parseInt(arrEqual[0]) / parseInt(arrEqual[1]);
    result.textContent = operationResultEqual;
  }
};

const doMath = (numandoperMath) => {
  numberofSign = 1;
  var arr = numandoperMath.split(" ");
  arr.pop();
  lastadd = arr.pop();
  if (arr.includes("+")) {
    operationResult = parseInt(arr[0]) + parseInt(arr[2]);
    result.textContent = operationResult + " " + lastadd + " ";
    return;
  }

  if (arr.includes("-")) {
    operationResult = parseInt(arr[0]) - parseInt(arr[2]);
    result.textContent = operationResult + " " + lastadd + " ";
    return;
  }

  if (arr.includes("*")) {
    operationResult = parseInt(arr[0]) * parseInt(arr[2]);
    result.textContent = operationResult + " " + lastadd + " ";
    return;
  }
  if (arr.includes("/")) {
    operationResult = parseInt(arr[0]) / parseInt(arr[2]);
    result.textContent = operationResult + " " + lastadd + " ";
    return;
  }
};

const checkSign = (numberofSign, numandoper) => {
  if (numberofSign == 2) {
    doMath(numandoper);
    return;
  }
  return;
};

const displayText = (e) => {
  if (result.textContent === "0") {
    if (
      (e.textContent === " + ") |
      (e.textContent === " - ") |
      (e.textContent === " * ") |
      (e.textContent === " / ")
    ) {
      numberofSign++;

      result.textContent += e.textContent;
      checkSign(numberofSign, result.textContent);

      return;
    } else {

      result.textContent = "";
      result.textContent += e.textContent;
      checkSign(numberofSign, result.textContent);
      return;
    }
  }

  if (result.textContent !== "0") {
    if (
      (e.textContent === " + ") |
      (e.textContent === " - ") |
      (e.textContent === " * ") |
      (e.textContent === " / ")
    ) {
      numberofSign++;
      
    }
    result.textContent += e.textContent;
    checkSign(numberofSign, result.textContent);
    return;
  }
};

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.textContent === "C") {
      clearAll();
      return;
    }

    if (e.textContent === "=") {
      doMathfromEqual(result.textContent);
      return;
    }
    displayText(e);
  });
});
