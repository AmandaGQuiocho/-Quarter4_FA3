function generateShape() {
    const input = document.getElementById("userInput").value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = ""; // Clear previous output

    const number = parseInt(input);

    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return;
    }

    let result = `Number inputted: ${number}\n\n`;

    if (number % 2 === 1) {
      // Rectangle (odd number)
      for (let i = number; i >= 1; i--) {
        result += (i + " ").repeat(number).trim() + "\n";
      }
    } else {
      // Triangle (even number)
      for (let i = number; i >= 1; i--) {
        result += (i + " ").repeat(i).trim() + "\n";
      }
    }

    outputDiv.innerText = result;
  }
