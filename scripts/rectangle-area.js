function calculateRectangleArea(){
    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width)

    // calculate rectangle area
    const area = length * width;
    console.log('area of the rectangle: ', area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}

function calculateRectangleArea() {
    const length = getInputValueById('rectangle-length');
    const width = getInputValueById('rectangle-width');
    const area = length * width;
  
    setInnerTextById('rectangle-area', area);
    document.getElementById('rectangle-area').in
    addToCalculationList("Rectangle", [length, width], area);
}
