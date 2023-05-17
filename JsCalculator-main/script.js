function cuentaIgual(button) {
  console.log(button.innerText);
  if (signo === "+") {
    resultado = a + b;
    // console.log("resultado " + resultado);
    rowtop.textContent = resultado;
    a = resultado;
    b = 0;
    signo = 0;
  } else if (signo === "-") {
    resultado = a - b;
    // console.log("resultado " + resultado);
    rowtop.textContent = resultado;
    a = resultado;
    b = 0;
    signo = 0;
  } else if (signo === "/") {
    resultado = a / b;
    //  console.log("resultado " + resultado);
    rowtop.textContent = resultado;
    a = resultado;
    b = 0;
    signo = 0;
  } else if (signo === "*") {
    resultado = a * b;
    //   console.log("resultado " + resultado);
    rowtop.textContent = resultado;
    a = resultado;
    b = 0;
    signo = 0;
  }
}

const buttons = document.querySelectorAll("button");
const rowtop = document.getElementById("row-top");
let a = 0,
  b = 0,
  resultado = 0,
  signo = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //console.log(b);
    if (
      (resultado != 0 && b == 0) ||
      rowtop.innerText == "+" ||
      rowtop.innerText == "-" ||
      rowtop.innerText == "*" ||
      rowtop.innerText == "/"
    ) {
      rowtop.innerText = button.innerText;
    } else {
      rowtop.innerText += button.innerText;
    }

    if (button.innerText === "⇦") {
      rowtop.innerText = rowtop.innerText.substring(
        0,
        rowtop.innerText.length - 2
      );
    }
    if (rowtop.innerText === 0 + button.innerText) {
      rowtop.innerText = button.innerText;
    }
    if (button.innerText == "C") {
      rowtop.innerText = "0";
      a = 0;
      b = 0;
      resultado = 0;
      signo = 0;
    }

    if (
      signo != 0 &&
      (button.innerText == "+" ||
        button.innerText == "-" ||
        button.innerText == "*" ||
        button.innerText == "/")
    ) {
      if (signo === "+") {
        resultado = a + b;
        // console.log("resultado " + resultado);
        rowtop.textContent = resultado;
        a = resultado;
        b = 0;
        signo = button.innerText;
      } else if (signo === "-") {
        resultado = a - b;
        // console.log("resultado " + resultado);
        rowtop.textContent = resultado;
        a = resultado;
        b = 0;
        signo = button.innerText;
      } else if (signo === "/") {
        resultado = a / b;
        //  console.log("resultado " + resultado);
        rowtop.textContent = resultado;
        a = resultado;
        b = 0;
        signo = button.innerText;
      } else if (signo === "*") {
        resultado = a * b;
        //   console.log("resultado " + resultado);
        rowtop.textContent = resultado;
        a = resultado;
        b = 0;
        signo = button.innerText;
      }
      //console.log(signo);
    }

    if (signo === 0) {
      if (button.innerText === "+") {
        rowtop.textContent = "+";
        signo = "+";
      } else if (button.innerText === "-") {
        rowtop.textContent = "-";
        signo = "-";
      } else if (button.innerText === "/") {
        rowtop.textContent = "/";
        signo = "/";
      } else if (button.innerText === "*") {
        rowtop.textContent = "*";
        signo = "*";
      }
      //console.log(signo);
    }

    if (signo === 0) {
      a = Number(rowtop.textContent);
      // console.log("a" + a);
    } else if (
      button.innerText != "=" &&
      button.innerText != "+" &&
      button.innerText != "-" &&
      button.innerText != "*" &&
      button.innerText != "/"
    ) {
      b = Number(rowtop.textContent);
      //console.log("b" + b);
    }

    if (button.innerText === "=") {
      cuentaIgual(button);
    }
  });
});
