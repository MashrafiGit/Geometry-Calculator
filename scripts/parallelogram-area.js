function calculateParallelogramArea(){

    const base = getInputValueById('parallelogram-base');
    // console.log('base value', base);

    const height = getInputValueById('parallelogram-height');
    // console.log('height value', height);

    const area = base * height;
    console.log('area of the parallelogram is ', area);

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
  
    setInnerTextById('ellipse-area', area);
    addToCalculationList("Ellipse", area);
  }

  function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
  
    setInnerTextById('parallelogram-area', area);
    addToCalculationList("Parallelogram", [base, height], area);
}
