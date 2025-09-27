var input = document.getElementById("inputResult");

function getValue(value) {
  input.value = input.value + value;
}

function clrAll() {
  input.value = "";
}

function square() {
  input.value = input.value * input.value;
}

function deleteChar() {
  input.value = input.value.slice(0, -2);
}

function equal() {
  input.value = eval(input.value);
}

function fractions() {
  input.value = 1 / input.value;
}

    
function getValue(val){
    var input= document.getElementById("inputResult")

    var current = input.value;

    var lastChar = current.slice(-1);

 if (
  (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "%") &&
  (val === "+" || val === "-" || val === "*" || val === "/" || val === "%")
) {
  return;
}
input.value = input.value + val;

 
}

