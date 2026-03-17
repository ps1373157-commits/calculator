let display = document.getElementById("display");

// Append value
function append(value) {
  if (display.value === "0" || display.value === "Invalid") {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    if (display.value === "") return;
    display.value = eval(display.value);
  } catch {
    display.value = "Invalid";
  }
}

// Keyboard support
document.addEventListener("keydown", function(e) {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});