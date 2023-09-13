function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultElement = document.getElementById('result');
  
    let convertedTemp;
  
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
      convertedTemp = (inputTemp * 9/5) + 32;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
      convertedTemp = (inputTemp - 32) * 5/9;
    } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
      convertedTemp = inputTemp + 273.15;
    } else if (inputUnit === 'kelvin' && outputUnit === 'celsius') {
      convertedTemp = inputTemp - 273.15;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
      convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
      convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
    } else {
      resultElement.textContent = 'Invalid unit combination';
      return;
    }
  
    resultElement.textContent = `${inputTemp} ${inputUnit.toUpperCase()} is equal to ${convertedTemp.toFixed(2)} ${outputUnit.toUpperCase()}`;
  }
  