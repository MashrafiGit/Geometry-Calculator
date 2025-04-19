let serial = 1;

function addToCalculationList(shapeName, areaInCm2) {
  const parent = document.getElementById('area-calculation-list');
  
  const areaInM2 = (areaInCm2 / 10000).toFixed(4); // cm² to m²

  const listItem = document.createElement('div');
  listItem.classList.add("flex", "justify-between", "items-center", "gap-2", "bg-gray-100", "p-2", "rounded");

  listItem.innerHTML = `
    <span>${serial++}. <strong>${shapeName}</strong></span>
    <span>${areaInCm2} cm²</span>
    <button onclick="this.outerHTML='<span>${areaInM2} m²</span>'" class="btn btn-sm btn-success text-white">Convert to m²</button>
  `;

  parent.appendChild(listItem);
}


function getInputValueById(id) {
    const value = parseFloat(document.getElementById(id).value);
    return isNaN(value) ? 0 : value;
  }
  
  function setInnerTextById(id, value) {
    document.getElementById(id).innerText = value;
  }