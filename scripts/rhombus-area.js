function calculateRhombusArea() {
    const d1 = parseFloat(document.getElementById('rhombus-d1').value);
    const d2 = parseFloat(document.getElementById('rhombus-d2').value);

    if (isNaN(d1) || isNaN(d2)) {
        alert('Please enter valid numbers for both diagonals!');
        return;
    }

    const area = 0.5 * d1 * d2;
    document.getElementById('rhombus-area').innerText = area;
}


function calculateRhombusArea() {
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');

    if (isNaN(d1) || isNaN(d2)) {
        alert('Please enter valid numbers for both diagonals!');
        return;
    }

    const area = 0.5 * d1 * d2;
    setInnerTextById('rhombus-area', area);
    addToCalculationList("Rhombus", area);
}
