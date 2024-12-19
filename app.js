let szavazatok = Array(12).fill(0);  

function szavazas(cardId) {
    var counterElement = document.getElementById('counter-' + cardId);
    var currentCount = parseInt(counterElement.innerText);
    szavazatok[cardId - 1]++;
    counterElement.innerText = szavazatok[cardId - 1] + " szavazat"; 
    
    frissitLegtobbSzavazatotKapott();
}

function frissitLegtobbSzavazatotKapott() {

    let maxSzavazat = Math.max(...szavazatok);
    let legnépszerűbbAjándékIndex = szavazatok.indexOf(maxSzavazat);
    
    let legnépszerűbbCard = document.getElementById('card-' + (legnépszerűbbAjándékIndex + 1));
    let legnépszerűbbTitle = legnépszerűbbCard.querySelector('.card-title');
    
    let infoBox = document.getElementById('legnépszerűbb-ajándék');
    infoBox.innerHTML = "A legnépszerűbb ajándék: " + legnépszerűbbTitle.innerText;
}
