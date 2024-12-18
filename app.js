function szavazas(cardId) {
    
    var counterElement = document.getElementById('counter-' + cardId);
    var currentCount = parseInt(counterElement.innerText);
    counterElement.innerText = currentCount + 1 + "szavazat";
  }